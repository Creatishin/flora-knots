import React, { Fragment, useState } from 'react';
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels
} from '@headlessui/react';
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import Typography from '../common/Typography';
import { navigationConst } from '../../utils/navConst';
import Banner from './Banner';
import Cart from './Cart';
import { CategorySection } from '../../types/navTypes';
import { useAppSelector } from '../../store/store';
import { useNavigate } from 'react-router-dom';
import { categoryList } from '../../services/Category';

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  console.log(categoryList, 'nav');
  const cart = useAppSelector((state) => state.cart);

  const [showBanner, setShowBanner] = useState(true);

  const navigate = useNavigate();

  const renderList = (category: CategorySection) => {
    console.log(category.sections);
    return category.sections.map((section) => (
      <li key={section.name} className="flow-root">
        <a href={`/${category.slug}/${section.slug}`} className="-m-2 block p-2 text-gray-500">
          {section.name}
        </a>
      </li>
    ));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData(event.currentTarget); // Get form data
    const searchValue = formData.get('searchValue') as string; // Extract input value

    if (searchValue?.trim()) {
      navigate(`/category#${searchValue}`); // Navigate with search term
    }
  };

  return (
    <div className="bg-white z-10">
      <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"
        />
        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-closed:-translate-x-full"
          >
            <div className="flex px-4 pt-5 pb-2">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-(gray-normal)"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="space-y-6 border-t border-(--gray-light) px-4 py-6">
              {navigationConst.pages.map((page) => (
                <div key={page.name} className="flow-root">
                  <a href={page.href} className="-m-2 block p-2 font-medium text-(--gray-dark)">
                    {page.name}
                  </a>
                </div>
              ))}
            </div>
            <TabGroup className="mt-2">
              <div className="border-b border-(--gray-light)">
                <TabList className="-mb-px flex space-x-8 px-4">
                  {navigationConst.categories.map((category) => (
                    <Tab
                      key={category.name}
                      className="flex-1 border-b-2 border-transparent px-1 py-4 text-base font-medium whitespace-nowrap text-(--gray-dark) data-selected:border-(--primary) data-selected:text-(--primary)"
                    >
                      {category.name}
                    </Tab>
                  ))}
                </TabList>
              </div>
              <TabPanels as={Fragment}>
                {navigationConst.categories.map((category) => (
                  <TabPanel key={category.name} className="space-y-10 px-4 pt-10 pb-8">
                    <div className="grid grid-cols-2 gap-x-4">
                      {category.featured.map((item) => (
                        <div key={item.name} className="group relative text-sm">
                          <img
                            alt={item.imageAlt}
                            src={item.imageSrc}
                            className="aspect-square w-full rounded-lg bg-(--gray-light) object-cover group-hover:opacity-75"
                          />
                          <a href={item.href} className="mt-6 block font-medium text-(--gray-dark)">
                            <span aria-hidden="true" className="absolute inset-0 z-10" />
                            {item.name}
                          </a>
                          <p aria-hidden="true" className="mt-1">
                            Explore More
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-2 gap-2 mt-6">{renderList(category)}</div>
                  </TabPanel>
                ))}
              </TabPanels>
            </TabGroup>
          </DialogPanel>
        </div>
      </Dialog>

      <header className="relative bg-white">
        {showBanner && <Banner onClose={() => setShowBanner(false)} />}

        <nav aria-label="Top" className="px-2 md:px-6 py-2">
          <div className="border-b max-w-[1500px] mx-auto border-(--gray-light)">
            <div className="flex h-16 items-center">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="relative rounded-md bg-white p-2 pl-0 text-gray-400 lg:hidden"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon aria-hidden="true" className="size-6" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <a href="/">
                  <span className="sr-only">FloraKnots</span>
                  <Typography variant="s-subTitle" className="style-font">
                    FloraKnots
                  </Typography>
                </a>
              </div>

              {/* Flyout menus */}
              <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {navigationConst.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-(--gray-medium) hover:text-(--gray-dark)"
                    >
                      {page.name}
                    </a>
                  ))}
                  {navigationConst.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      <div className="relative flex">
                        <PopoverButton className="cursor-pointer relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-(--gray-medium) transition-colors duration-200 ease-out outline-0 hover:text-(--gray-dark) data-open:border-(--primary) data-open:text-(--primary)">
                          {category.name}
                        </PopoverButton>
                      </div>

                      <PopoverPanel
                        transition
                        className="absolute inset-x-0 top-full text-sm text-(--gray-dark) transition data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                      >
                        {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                        <div
                          aria-hidden="true"
                          className="absolute inset-0 top-1/2 bg-white shadow-sm"
                        />

                        <div className="relative bg-white">
                          <div className="mx-auto max-w-7xl px-8">
                            <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                              <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                {category.featured.map((item) => (
                                  <div
                                    key={item.name}
                                    className="group relative text-base sm:text-sm"
                                  >
                                    <img
                                      alt={item.imageAlt}
                                      src={item.imageSrc}
                                      className="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"
                                    />
                                    <a
                                      href={item.href}
                                      className="mt-6 block font-medium text-(gray-dark)"
                                    >
                                      <span aria-hidden="true" className="absolute inset-0 z-10" />
                                      {item.name}
                                    </a>
                                    <p aria-hidden="true" className="mt-1">
                                      Explore More
                                    </p>
                                  </div>
                                ))}
                              </div>
                              <div className="row-start-1 grid grid-cols-3 gap-x-2 gap-y-1 text-sm">
                                {renderList(category)}
                              </div>
                            </div>
                          </div>
                        </div>
                      </PopoverPanel>
                    </Popover>
                  ))}
                </div>
              </PopoverGroup>
              <div className="ml-auto gap-3 flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end">
                  <form
                    onSubmit={handleSubmit}
                    className="border-2 flex gap-2 border-(--gray-light) rounded-full px-4 py-2"
                  >
                    <input
                      required
                      name="searchValue"
                      className="focus-visible:outline-0 outline-0"
                      placeholder="Search..."
                    />
                    <button
                      type="submit"
                      className="group -m-2 flex items-center p-2 cursor-pointer"
                    >
                      <MagnifyingGlassIcon
                        aria-hidden="true"
                        className="size-7 shrink-0 text-gray-400 group-hover:text-gray-500"
                      />
                    </button>
                    <span className="sr-only">Search products</span>
                  </form>
                </div>
                <PopoverGroup className="lg:hidden ml-2 block self-stretch">
                  <Popover key={'Search-cta'} className="flex">
                    <div className="relative p-2 flex">
                      <PopoverButton className="text-gray-400 cursor-pointer relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-(--gray-medium) transition-colors duration-200 ease-out outline-0 hover:text-(--gray-dark) data-open:border-(--primary) data-open:text-(--primary)">
                        <MagnifyingGlassIcon
                          aria-hidden="true"
                          className="size-7 shrink-0 text-current group-hover:text-gray-500"
                        />
                      </PopoverButton>
                    </div>

                    <PopoverPanel
                      transition
                      className="absolute inset-x-0 top-full text-sm text-(--gray-dark) transition data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                    >
                      {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                      <div aria-hidden="true" className="absolute inset-0 top-1/2" />

                      <div className="relative px-4">
                        <form
                          onSubmit={handleSubmit}
                          className="border-2 bg-white shadow-sm flex gap-2 border-(--gray-light) rounded-full px-4 py-2"
                        >
                          <input
                            autoFocus
                            required
                            name="searchValue"
                            className="focus-visible:outline-0 w-full outline-0"
                            placeholder="Search..."
                          />
                          <button
                            type="submit"
                            className="group -m-2 flex items-center p-2 cursor-pointer"
                          >
                            <MagnifyingGlassIcon
                              aria-hidden="true"
                              className="size-7 shrink-0 text-gray-400 group-hover:text-gray-500"
                            />
                          </button>
                          <span className="sr-only">Search products</span>
                        </form>
                      </div>
                    </PopoverPanel>
                  </Popover>
                </PopoverGroup>
                <div className="flex flex-1 items-center justify-end">
                  <a href="/sign-in" className="group -m-2 flex items-center p-2 cursor-pointer">
                    <UserIcon
                      aria-hidden="true"
                      className="size-7 shrink-0 text-gray-400 group-hover:text-gray-500"
                    />
                    <span className="sr-only">user profile</span>
                  </a>
                </div>
                <div className="flow-root">
                  <button
                    onClick={() => setOpenCart((prev) => !prev)}
                    className="group relative flex items-center p-2 cursor-pointer"
                  >
                    <ShoppingBagIcon
                      aria-hidden="true"
                      className="size-6 shrink-0 text-gray-400 group-hover:text-gray-500"
                    />
                    <span className="ml-2 flex items-center top-[-5px] right-[-5px] justify-center absolute w-[20px] bg-(--primary) aspect-square group-hover:bg-(--primary-dark) rounded-full text-sm font-medium text-white">
                      <Typography variant="muted" className="font-normal text-xs">
                        {cart.cart_items.length}
                      </Typography>
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <Cart open={openCart} setOpen={setOpenCart} />
    </div>
  );
}
