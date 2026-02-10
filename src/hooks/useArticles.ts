import { useMemo } from 'react';
import { useSearchParams } from 'react-router';
import type { Article, SectionType } from '../types';

import amArticles from '../data/articles-am.json';
import noonArticles from '../data/articles-noon.json';
import pmArticles from '../data/articles-pm.json';

const articlesBySection: Record<string, Article[]> = {
  am: amArticles as Article[],
  noon: noonArticles as Article[],
  pm: pmArticles as Article[],
};

const contentModules: Record<string, Record<string, string>> = {
  am: import.meta.glob('/src/content/am/*.md', { query: '?raw', import: 'default', eager: true }),
  noon: import.meta.glob('/src/content/noon/*.md', { query: '?raw', import: 'default', eager: true }),
  pm: import.meta.glob('/src/content/pm/*.md', { query: '?raw', import: 'default', eager: true }),
};

export function useArticleDetail(section: SectionType) {
  const [searchParams] = useSearchParams();
  const idx = Number(searchParams.get('idx'));

  const articles = articlesBySection[section] || [];
  const article = articles.find((a) => a.idx === idx);

  const content = useMemo(() => {
    if (!article) return '';
    const modules = contentModules[section] || {};
    const key = `/src/content/${section}/${article.idx}.md`;
    return modules[key] || `# ${article.title}\n\n${article.summary}\n\n*이 기사의 상세 내용은 준비 중입니다.*`;
  }, [article, section]);

  const currentIndex = articles.findIndex((a) => a.idx === idx);
  const prevArticle = currentIndex < articles.length - 1 ? articles[currentIndex + 1] : null;
  const nextArticle = currentIndex > 0 ? articles[currentIndex - 1] : null;

  return { article, content, prevArticle, nextArticle };
}
