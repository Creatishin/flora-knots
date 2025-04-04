import React, { useEffect, useState } from 'react';
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems
} from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon } from '@heroicons/react/20/solid';
import { cn } from '../../utils/cnHelper';
import Typography from '../../components/common/Typography';
import categoryList from '../../services/Category';
import { useParams } from 'react-router-dom';
import Button from '../../components/common/Button';
import { productList as productListData } from '../../services/Products';
import ProductCard from '../../components/layout/Cards/ProductCard';
import NotFound from '../AdditionalPages/NotFound';

const sortOptions = [
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false }
];
const subCategories = [
  { label: 'New Arrivals', value: 'new_arrival' },
  { label: 'Best Selling', value: 'bestseller' },
  { label: 'Featured', value: 'featured' }
];

const filters = [
  {
    id: 'category',
    name: 'Category',
    options: categoryList.map((category) => ({
      value: category.slug,
      label: category.name,
      checked: false
    }))
  }
];

export default function Category() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [selectedSubCategories, setSelectedSubCategories] = useState<string>('');
  const [checkedCategory, setCheckedCategory] = useState<{ [key: string]: string[] }>(
    filters.reduce((acc, curr) => ({ ...acc, [curr.id]: [] }), {})
  );

  const { subcategorySlug, categorySlug } = useParams();

  useEffect(() => {
    if (subcategorySlug) {
      setSelectedSubCategories(subcategorySlug);
    }

    if (categorySlug) {
      setCheckedCategory((prev) => ({ ...prev, category: [...prev.category, categorySlug] }));
    }
  }, [subcategorySlug, categorySlug]);

  const handleCheckChange = (sectionId: string, optionValue: string) => {
    setCheckedCategory((prev) => ({
      ...prev,
      [sectionId]: prev[sectionId].includes(optionValue)
        ? prev[sectionId].filter((cat) => cat !== optionValue)
        : [...prev[sectionId], optionValue]
    }));
  };

  const renderFilters = () => (
    <form className="mt-4 border-t lg:border-t-0 border-gray-200">
      <h3 className="sr-only">Categories</h3>
      <div className="px-2 py-3">
        {subCategories.map((category) => (
          <Button
            color="text"
            className={`p-2 font-${selectedSubCategories === category.value ? 'semibold' : 'normal'}`}
            size="text"
            onClick={() =>
              setSelectedSubCategories((prev) => (prev === category.value ? '' : category.value))
            }
            key={category.label}
          >
            {category.label}
          </Button>
        ))}
      </div>

      {filters.map((section) => (
        <Disclosure key={section.id} as="div" className="border-t border-gray-200 px-4 py-6">
          <h3 className="-mx-2 -my-3 flow-root">
            <DisclosureButton className="cursor-pointer group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
              <Typography variant="body-2" className="text-(--gray-dark) font-medium">
                {section.name}
              </Typography>
              <span className="ml-6 flex items-center">
                <PlusIcon aria-hidden="true" className="size-5 group-data-open:hidden" />
                <MinusIcon aria-hidden="true" className="size-5 group-not-data-open:hidden" />
              </span>
            </DisclosureButton>
          </h3>
          <DisclosurePanel className="pt-6">
            <div className="space-y-6">
              {section.options.map((option, optionIdx) => (
                <div key={option.value} className="cursor-pointer flex gap-3">
                  <div className="flex h-5 shrink-0 items-center">
                    <div className="cursor-pointer group grid size-4 grid-cols-1">
                      <input
                        checked={checkedCategory[section.id].includes(option.value)}
                        onChange={() => handleCheckChange(section.id, option.value)}
                        id={`filter-mobile-${section.id}-${optionIdx}`}
                        name={`${section.id}[]`}
                        type="checkbox"
                        className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-(--primary-dark) checked:bg-(--primary) forced-colors:appearance-auto"
                      />
                      <svg
                        fill="none"
                        viewBox="0 0 14 14"
                        className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                      >
                        <path
                          d="M3 8L6 11L11 3.5"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="opacity-0 group-has-checked:opacity-100"
                        />
                        <path
                          d="M3 7H11"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="opacity-0 group-has-indeterminate:opacity-100"
                        />
                      </svg>
                    </div>
                  </div>
                  <label
                    htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                    className="cursor-pointer min-w-0 flex-1 text-gray-500"
                  >
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </DisclosurePanel>
        </Disclosure>
      ))}
    </form>
  );

  const filteredProducts = productListData.filter((product) => {
    // Check if the selected subcategory matches
    const matchesSubcategory = selectedSubCategories
      ? product[selectedSubCategories as 'new_arrival' | 'featured' | 'bestseller']
      : true;

    // Check if the product matches the checked categories
    const matchesCategory = checkedCategory.category.length
      ? checkedCategory.category.includes(
          categoryList.find((category) => category.id === product.category_id)?.slug || ''
        )
      : true;

    return matchesSubcategory && matchesCategory;
  });

  return (
    <div>
      {/* Mobile filter dialog */}
      <Dialog
        open={mobileFiltersOpen}
        onClose={setMobileFiltersOpen}
        className="relative z-40 lg:hidden"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"
        />

        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative ml-auto flex size-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-closed:translate-x-full"
          >
            <div className="flex items-center justify-between px-4">
              <h2 className="text-lg font-medium text-gray-900">Filters</h2>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                className="-mr-2 flex size-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>

            {/* Filters */}
            {renderFilters()}
          </DialogPanel>
        </div>
      </Dialog>

      <main className="mx-auto p-2">
        <div className="flex items-baseline justify-between border-b border-gray-200 pb-6">
          <Typography variant="s-subTitle" className="font-medium">
            Products
          </Typography>

          <div className="flex items-center">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                  Sort
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="-mr-1 ml-1 size-5 shrink-0 text-gray-400 group-hover:text-gray-500"
                  />
                </MenuButton>
              </div>

              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white ring-1 shadow-2xl ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                <div className="py-1">
                  {sortOptions.map((option) => (
                    <MenuItem key={option.name}>
                      <a
                        href={option.href}
                        className={cn(
                          option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                          'block px-4 py-2 text-sm data-focus:bg-gray-100 data-focus:outline-hidden'
                        )}
                      >
                        {option.name}
                      </a>
                    </MenuItem>
                  ))}
                </div>
              </MenuItems>
            </Menu>

            <button
              type="button"
              onClick={() => setMobileFiltersOpen(true)}
              className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
            >
              <span className="sr-only">Filters</span>
              <FunnelIcon aria-hidden="true" className="size-5" />
            </button>
          </div>
        </div>

        <section aria-labelledby="products-heading" className="pt-6 pb-24">
          <h2 id="products-heading" className="sr-only">
            Products
          </h2>

          <div className="grid grid-cols-1 items-start gap-x-8 gap-y-10 lg:grid-cols-4">
            {/* Filters */}
            <div className="hidden lg:block">{renderFilters()}</div>

            {/* Product grid */}
            <div className="lg:col-span-3 grid grid-cols-2  sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {filteredProducts.length ? (
                filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))
              ) : (
                <div className="col-span-2 lg:col-span-3">
                  <NotFound description="No product found" message="Oops!">
                    <Button
                      onClick={() => {
                        setSelectedSubCategories('');
                        setCheckedCategory(
                          filters.reduce((acc, curr) => ({ ...acc, [curr.id]: [] }), {})
                        );
                      }}
                      color="primary-white"
                      size="small"
                    >
                      Reset filter
                    </Button>
                  </NotFound>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
