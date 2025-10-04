import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useGetAboutusQuery } from "../../services/aboutus/aboutusApi";

const AboutPage = () => {
  const { data, error, isLoading } = useGetAboutusQuery();

  // if (isLoading) return <p>Loading...</p>;
  // if (error) return <p>Failed to load: {error.message}</p>;

  return (
    <div>
      {/* About Section */}
      <section className="flat-spacing-3 pb-0">
        <div className="container">
          <div className="flat-title-2 d-xl-flex justify-content-xl-between">
            <div className="box-title">
              {data?.content && (
                <div dangerouslySetInnerHTML={{ __html: data.content }} />
              )}
            </div>
            {/* <div className="box-text">
              {data?.content2 && (
                <div dangerouslySetInnerHTML={{ __html: data.content2 }} />
              )}
            </div> */}
          </div>
          {data?.image && (
            <div className="image radius-16 overflow-hidden banner-about">
              <img
                src={data.image}
                alt="Triliv"
                className="w-100 h-100 object-fit-cover"
              />
            </div>
          )}
        </div>
      </section>

      {/* Why Choose */}
      <section className="flat-spacing-3">
        <div className="container">
          <div className="flat-title text-center">
            {data?.content3 && (
              <div dangerouslySetInnerHTML={{ __html: data.content3 }} />
            )}
          </div>
          <div className="row">
            <div className="col-xl-7 col-md-6">
              <ul className="list-esd d-md-flex flex-md-column justify-content-md-center h-100">
                <li className="item">
                  {data?.content4 && (
                    <div dangerouslySetInnerHTML={{ __html: data.content4 }} />
                  )}
                </li>
              </ul>
            </div>
            <div className="col-xl-5 col-md-6">
              {data?.image2 && (
                <div className="image radius-16 overflow-hidden w-100 h-100">
                  <img
                    src={data.image2}
                    alt="Triliv"
                    className="w-100 h-100 object-fit-cover"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Creative Style */}
      {/* <section className="flat-spacing-3 pt-0">
        <div className="container">
          <div className="flat-title-2 d-xl-flex justify-content-xl-between">
            <div className="box-title">
              {data?.content5 && (
                <div dangerouslySetInnerHTML={{ __html: data.content5 }} />
              )}
            </div>
            <div className="box-text">
              {data?.content6 && (
                <div dangerouslySetInnerHTML={{ __html: data.content6 }} />
              )}
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default AboutPage;
