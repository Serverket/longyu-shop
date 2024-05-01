import { useState, useEffect } from 'react';
import { useParams, useSearchParams } from "react-router-dom";
import { Loader } from "../../components/Loader";
import { Sidebar } from "./Sidebar";
import { ItemsList } from "./ItemsList";
import { Container } from "../../components/Container";
import { Pagination } from "../../components/Pagination";
import { SortItems } from "./SortItems";
import { useFetch } from "../../hooks/useFetch";
import { categoriesData } from "./categoriesData";
import itemsData from './itemsData.json';

import image1 from '../../assets/images/1.jpg';
import image2 from '../../assets/images/2.jpg';
import image3 from '../../assets/images/3.jpg';
import image4 from '../../assets/images/4.jpg';
import image5 from '../../assets/images/5.jpg';
import image6 from '../../assets/images/6.jpg';

const images = [image1, image2, image3, image4, image5, image6];

export function Shop() {

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const { category } = useParams();
  const [searchParams] = useSearchParams();
  const currCategoryId = category || "abcat0712000";
  const currPage = searchParams?.get("page") || 1;
  const sortBy = searchParams?.get("sort") || "customerReviewCount.dsc";

  const searchTerm = searchParams?.get("search");
  const searchBy = searchTerm ? `&name=${searchTerm}*` : "";

  const loadingItems = false;
  const errorItems = null;
  const anticipateFetch = () => { };

  const categories = categoriesData.subCategories;
  const loadingStyles = loadingItems && "opacity-30";

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [category, currPage]);

  if (errorItems)
    return (
      <Container className="flex flex-col justify-center grow">
        <h1 className="text-3xl">An error occurred while loading the data!</h1>
        <span className="block text-lg text-slate-500">Please, try again...</span>
      </Container>
    );

  return !itemsData ? (
    <div className="grow">
      <Loader />
    </div>
  ) : (
    <>
      <div className="relative -mt-20 bg-no-repeat bg-cover h-52 md:h-80">
        <div className="absolute inset-0">
          {images.map((image, i) => (
            <img
              key={i}
              src={image}
              alt={`Background ${i + 1}`}
              className={`absolute inset-0 object-cover w-full h-full transition-opacity duration-1000 ${currentImage === i ? "opacity-100" : "opacity-0"
                }`}
            />
          ))}
        </div>
        <div className="relative flex items-end w-full h-full bg-black/30">
          <Container className="text-right">
            <h1 className="text-3xl font-extrabold leading-none tracking-tight text-white font-headings md:text-6xl">
              NUESTRA TIENDA
            </h1>
          </Container>
        </div>
      </div>

      <div className="relative grow">
        <Container className="relative flex flex-col md:flex-row">
          <Sidebar
            currCategory={category}
            categories={categories}
            onCategoryChange={anticipateFetch}
          />

          <div className={`py-12 md:pl-10 w-full ${loadingStyles}`}>
            <div className="flex justify-between mb-3 text-sm">
              <div>
                {searchBy ? (
                  <div className="font-medium">
                    Showing results for:{" "}
                    <span className="block text-xl font-bold">
                      {searchTerm} ({itemsData.total})
                    </span>
                  </div>
                ) : (
                  <span className="block font-bold">{itemsData.total} items</span>
                )}
              </div>
              <SortItems onChange={anticipateFetch} />
            </div>

            {itemsData.products.length > 0 ? (
              <>
                <ItemsList
                  isLoading={loadingItems}
                  totalItems={itemsData.total}
                  items={itemsData.products}
                />
                <div>
                  {+itemsData.totalPages && (
                    <Pagination
                      currPage={+currPage}
                      totalPages={+itemsData.totalPages}
                      siblings={3}
                      onPageChange={anticipateFetch}
                    />
                  )}
                </div>
              </>
            ) : (
              <p className="font-medium">No items found, please try again.</p>
            )}
          </div>
        </Container>
      </div>
    </>
  );
}
