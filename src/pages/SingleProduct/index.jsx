import { useParams } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { Loader } from "../../components/Loader";
import { Container } from "../../components/Container";
/* import { AdditionalInfo } from "./AdditionalInfo"; */
import { StarsRating } from "../../components/StarsRating";
import { Button } from "../../components/Button";
import { Carousel } from "./Carousel";
import { decode } from "html-entities";
import itemsData from '../Shop/itemsData.json';

const productData = itemsData.products;

export function SingleProduct() {
  const cartContext = useCart();
  const { id } = useParams();
  const data = productData.find((product) => product.sku === id);

  const addItem = () => {
    const { sku, name, image, regularPrice, salePrice, onSale } = data;
    cartContext.toggleIsCartActive();
    cartContext.handleAddItemToCart({
      sku,
      name,
      image,
      regularPrice,
      salePrice,
      onSale,
    });
  };
  
  return (
    <>
      <Container
        className="flex flex-col mt-5 mb-32 gap-y-8 gap-x-32 md:flex-row md:mt-20"
        as="section"
      >
        <div className="w-full max-w-lg mx-auto">
          {data && data.images && data.images.length > 0 && (
            <img 
              src={data.images[0]} 
              alt={data.name} 
              className="object-cover w-full h-64 md:h-auto md:max-h-96" 
            />
          )}
        </div>

        <div className="max-w-prose">
          <div className="flex flex-col mb-3 text-sm md:flex-row gap-x-6">
            <div>
              <span className="inline-block mr-2 font-semibold">Model:</span>
              {data.modelNumber}
            </div>
            <div>
              <span className="inline-block mr-2 font-semibold">SKU:</span>
              {data.sku}
            </div>
          </div>

          <h1 className="mb-1 text-2xl font-bold leading-none">{data.name}</h1>

          <StarsRating
            itemRating={data.customerReviewAverage}
            showRating={true}
            reviewCount={data.customerReviewCount}
            className="mb-5"
          />

          <Price
            regularPrice={data.regularPrice}
            salePrice={data.salePrice}
            onSale={data.onSale}
          />

          {data.color && (
            <div>
              <span className="inline-block font-bold">Color:</span> {data.color}
            </div>
          )}

          <hr className="mb-8 border-slate-200 mt-7"></hr>

          <div className="text-sm mb-8 leading-snug [&>p]:mb-3">
            <p className="mb-4">{data.description}</p>
            <p>{decode(data.longDescription)}</p>

            <p>
              Proin varius magna nec laoreet viverra. Maecenas eleifend, diam et vulputate
              facilisis, nunc purus fermentum neque, vitae vestibulum lectus nunc a
              turpis. Curabitur tincidunt arcu et ex posuere, id imperdiet purus iaculis.
              Fusce efficitur tincidunt purus vitae sagittis. Nunc commodo nibh eget
              condimentum iaculis. Ut erat massa, gravida eget urna sit amet, tristique
              posuere erat. Aliquam eu mollis massa. Proin venenatis lectus vitae
              scelerisque dapibus. Duis auctor lectus id nisi viverra congue. Curabitur et
              semper purus. Cras vel lacus sit amet nulla rutrum venenatis et vel nunc.
              Curabitur dignissim auctor mollis. Integer mattis vehicula elit ac
              scelerisque. Nullam tempor massa erat, et feugiat massa luctus a. Nullam
              viverra malesuada purus at fermentum. Pellentesque id imperdiet ex.
            </p>
          </div>

          <Button
            variant="primary"
            onClick={addItem}
            label="Add to Bag"
            className="mb-4 font-extrabold"
          >
            ADD TO BAG
          </Button>
        </div>
      </Container>

      {/* <AdditionalInfo
        features={data.features}
        included={data.includedItemList}
        details={data.details}
      /> */}
    </>
  );
}

function Price({ regularPrice, salePrice, onSale }) {
  const createPriceElement = (price) => {
    return (
      <div>
        <span className="mr-1 font-bold">$</span>
        <span className="text-3xl font-medium leading-none">{price}</span>
      </div>
    );
  };

  return (
    <div className="mb-6 leading-none">
      {onSale ? (
        <>
          <span className="block text-xl text-gray-500 line-through">
            ${regularPrice}
          </span>
          {createPriceElement(salePrice)}
        </>
      ) : (
        <>{createPriceElement(regularPrice)}</>
      )}
    </div>
  );
}
