import { Link } from 'react-router';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import articles from '../../data/articles-noon.json';
import type { Article } from '../../types';

export default function NoonSection() {
  const data = articles as Article[];

  return (
    <section className="home-section section-noon">
      <div className="home-section-inner">
        <div className="home-section-header">
          <div className="home-section-title-group">
            <span className="home-section-label">
              <span className="home-section-time-icon">{'\u2600'}</span>
              Noon Lunch Box
            </span>
            <h2 className="home-section-title">오늘 배우는 ESG 키워드</h2>
          </div>
          <Link to="/article/noonList" className="more-link">
            More &rarr;
          </Link>
        </div>

        <Swiper
          modules={[Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {data.slice(0, 6).map((article) => (
            <SwiperSlide key={article.idx}>
              <Link to={`/article/noonDetail?idx=${article.idx}`} className="carousel-card">
                <img
                  className="carousel-card-image"
                  src={article.thumbnail}
                  alt={article.title}
                  loading="lazy"
                />
                <div className="carousel-card-body">
                  <span className="carousel-card-category">{article.category}</span>
                  <h3 className="carousel-card-title">{article.title}</h3>
                  <p className="carousel-card-summary">{article.summary}</p>
                  <div className="carousel-card-meta">
                    <span>{article.author} · {article.date}</span>
                    <span className="carousel-card-readmore">보러가기 &rarr;</span>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
