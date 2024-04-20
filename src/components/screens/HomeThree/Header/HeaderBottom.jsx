import { useState } from "react";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { Img, Input, Text } from "../../..";
import { CloseSVG } from "../../../../assets/images";
import "../../../../styles/index.css";

export function HeaderBottom(props) {
  const [showHamburgerDropdown, setShowHamburgerDropdown] = useState(false);

  const toggleHamburgerDropdown = () => {
    setShowHamburgerDropdown((prevState) => !prevState);
  };

  const closeHamburgerDropdown = () => {
    setShowHamburgerDropdown(false);
  };

  return (
    <div className=" wrapper flex flex-row justify-center  py-4 border-gray-200 border-b border-solid bg-white-A700">
      <div className="flex flex-row justify-center w-full  max-w-[1360px]">
        <div className="flex flex-row relative  justify-center xl:justify-between items-center w-full md:gap-5">
          <Img
            src="images/img_link_grogin_logo_dark_png.png"
            alt="linkgrogin_one"
            className="w-[100px] "
          />

          <div className="flex flex-row justify-center xl:hidden w-[3%] md:w-full ml-[23px] p-[7px] md:ml-0 sm:ml-5 bg-rose-100 rounded-[19px]">
            <div>
              <Img
                src="images/img_link_black_900.svg"
                alt="link_one"
                className="h-[24px] w-[24px]"
              />
            </div>
          </div>
          <div className="flex flex-col items-start xl:hidden justify-start w-[4%] md:w-full ml-[7px] md:ml-0">
            <a href="#" className="opacity-0.7">
              <Text
                size="s"
                as="p"
                className="!text-black-900_99 tracking-[-0.32px]"
              >
                Deliver to
              </Text>
            </a>
            <a href="#">
              <Text
                as="p"
                className="!text-black-900 tracking-[-0.32px] !font-medium"
              >
                all
              </Text>
            </a>
          </div>
          <Input
            color="gray_100"
            shape="round"
            name="search"
            placeholder="Search for products, categories or brands..."
            value={props.searchBarValue1}
            onChange={(e) => props.setSearchBarValue1(e)}
            suffix={
              props.searchBarValue1?.length > 0 ? (
                <CloseSVG
                  onClick={() => props.setSearchBarValue1("")}
                  height={26}
                  width={26}
                  fillColor="#000000ff"
                />
              ) : (
                <Img
                  src="images/img_search_button.svg"
                  alt="Search → Button"
                  className="cursor-pointer"
                />
              )
            }
            className="w-[64%]  ml-6 gap-[35px] xl:hidden md:ml-0 sm:ml-5 text-gray-600"
          />
          <div className="flex items-center md:hidden justify-between ml-5 w-[16%] xl:w-[16%] lg:w-[18%] md:w-[24%] sm:w-[30%] tablet:hidden">
            {/* new 3 icons  */}
            <div className="flex flex-col items-center">
              <Img
                src="images/img_link_black_900_26x26.svg"
                alt="link_three"
                className="h-[26px] w-[26px]"
              />
              <p className="text-xs font-medium">Account</p>
            </div>
            <div className="flex flex-col items-center relative">
              <Img
                src="images/img_link_26x26.svg"
                alt="image"
                className="h-[26px] w-[26px] "
              />
              <p className="text-xs font-medium">Wishlist</p>
              <div className="bg-red-700 absolute top-[-5px] right-0 rounded-full w-[17px] text-center text-white-A700 text-xs font-semibold">
                0
              </div>
            </div>
            <div className="flex flex-col items-center relative">
              <Img
                src="images/img_link_1.svg"
                alt="link_one"
                className="h-[26px] w-[26px] "
              />
              <p className="text-xs font-medium">Your Cart</p>
              <div className="bg-red-700 absolute top-[-5px] right-0 rounded-full w-[17px] text-center text-white-A700 text-xs font-semibold">
                0
              </div>
            </div>
          </div>
          {/* Conditionally render hamburger or cross icon based on the state */}
          <div
            className="hidden md:block md:py-4 z-50 "
            onClick={toggleHamburgerDropdown}
          >
            {showHamburgerDropdown ? <RxCross2 /> : <RxHamburgerMenu />}
          </div>
          {/* hamburger content */}
          {showHamburgerDropdown && (
            <div className="absolute z-10 top-10 left-0 w-[100%]">
              <ul className="flex flex-col items-center h-[400px] justify-center gap-5 bg-[#000000e6] text-white-A700 first-letter: font-bold ">
                <li>Home</li>
                <li>Shop</li>
                <li>Fruits & Vegetables</li>
                <li>Beverages</li>
                <li>Blog</li>
                <li>Contact</li>
                <li>Trending Products</li>
                <li className="text-orange-600">Almost Finished</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
