import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";
import Products from './Products';
import { useStateValue } from '../Apis/StateContext';
import CheckoutProduct from './CheckoutProduct';
import CompareModal from './CompareModal';
import Carousel from "react-grid-carousel";



const Home = () => {
    //  let [use, setuse] = useState(json);
    const [{ basket }, dispatch] = useStateValue();
    
    return (
      <>
        <div className="Carousel">
          <Carousel cols={3} rows={1} gap={10} loop>
            <Carousel.Item>
              <div>
                <Products
                  id="1"
                  image="https://cdn.pixabay.com/photo/2018/04/29/11/54/strawberries-3359755__340.jpg"
                  price="$7"
                  description="strawberries"
                  name="strawberries"
                  condition="Fresh"
                  color="red"
                />
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div>
                <Products
                  id="2"
                  image="https://cdn.pixabay.com/photo/2016/06/02/20/58/kiwi-1432088__480.jpg"
                  price="$7"
                  description="kiwi"
                  name="kiwi"
                  condition="Frozen"
                  color="green"
                />
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="carouselitem">
                <Products
                  id="3"
                  image="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTCBxtgqqYR72b3MkUPUWeXCIUcD2dWeKC2-Xj7X_W-PfkiN56epDLUrEsT4ghPjmoLBFdh64JGkHH6xH8c5fn2wrbk64XLhOiDZjBR6CDtt-prEXf7TZhi&usqp=CAE"
                  price="$5"
                  description="Litchi"
                  name="Litchi"
                  condition="Frozen"
                  color="crimson"
                />
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="carouselitem">
                <Products
                  id="4"
                  image="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQzbusFCgO1LOVVKEX3enMw4J776JD77h1U04ndjyiIq86Ixw7jc6jnvXWTaDil7IeBVoU3tePxkgcMgh-BY_9U7GPGtfhsdjz5R_Nnh-qSjKWQbj9ui5s5jg&usqp=CAE"
                  price="$25"
                  description="pomogranate"
                  name="pomogranate"
                  condition="Frozen"
                  color="red"
                />
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="carouselitem">
                <Products
                  id="5"
                  image="https://cdn.pixabay.com/photo/2014/02/01/17/30/apple-256268__340.jpg"
                  price="$5"
                  description="Apple"
                  name="Apple"
                  condition="Fresh"
                  color="red"
                />
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="carouselitem">
                <Products
                  id="6"
                  image="https://media.istockphoto.com/photos/watermelon-sliced-picture-id1213068277?k=20&m=1213068277&s=612x612&w=0&h=O50WtwQpRiXoXAqy-AuBbJPT_o_0Pz6_r3_7tjDgMrM="
                  price="$4"
                  description="Watermelon"
                  name="watermelon"
                  condition="Fresh"
                  color="red"
                />
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="carouselitem">
                <Products
                  id="7"
                  name="Blue Berries"
                  image="https://media.istockphoto.com/photos/fresh-blueberry-picture-id828761410?k=20&m=828761410&s=612x612&w=0&h=8Vzwu8hZlH8aPmrza0MCAjGq6jsbVGHMV7w3ZwmuBHw="
                  price="$8"
                  colors="blue"
                  condition="Fresh"
                  description="blueberries"
                  color="purple"
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carouselitem">
                <Products
                  id="8"
                  name="Dragon Fruit"
                  image="https://media.istockphoto.com/photos/white-dragon-fruit-picture-id503045095?k=20&m=503045095&s=612x612&w=0&h=XKSeV9Wjpzu8D6ZKnmkHOYSd34ZTwUaJrn_7A9_9Oso="
                  price="$9"
                  colors="pink"
                  condition="Fresh"
                  description="Drogon Fruit"
                  color="pink"
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carouselitem">
                <Products
                  id="9"
                  name="Sapota"
                  image="https://media.istockphoto.com/photos/sapodilla-fruit-picture-id169941852?k=20&m=169941852&s=612x612&w=0&h=E0_i89u9VqrFNL93tNUjOIRdwucsXOM9MA89wcM_ESo="
                  price="$9"
                  colors="Brown"
                  condition="Fresh"
                  description="Sapota"
                  color="brown"
                />
              </div>
            </Carousel.Item>
          </Carousel>
          <hr />
          <div>
            <h2 className="checkout__title">Compare the fruits</h2>

            {basket.map(item => (
              <>
                <CheckoutProduct
                  id={item.id}
                  price={item.price}
                  color={item.color}
                  condition={item.condition}
                  list={item.list}
                />
              </>
            ))}
          </div>
        </div>
      </>
    );
}

export default Home