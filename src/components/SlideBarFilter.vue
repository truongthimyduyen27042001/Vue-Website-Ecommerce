<template>
    <div class="collection-filters">
        <div class="collection-filters">
            <facet-filters-form class="facets">
                <form id="FacetFiltersForm">
                    <div id="FacetsWrapperDesktop">
                        <div class="headingfilter">
                            <i class="fa-solid fa-sliders"></i>
                            <span>Filter By</span>
                        </div>
                        <div class="active-facets active-facets-desktop">
                            <div>
                                <a href="/collections/women" class="active-facets__button btn--clear--all">
                                    <i class="fa-solid fa-trash"></i>
                                    Clear All
                                </a>
                            </div>
                            <div>
                                <a href="/collections/women?filter.v.availability=0&amp;filter.v.price.gte=0&amp;filter.v.price.lte=975.00&amp;sort_by=best-selling"
                                    class="active-facets__button">
                                    In stock
                                    <i class="fa-solid fa-xmark"></i>
                                </a>
                            </div>
                            <div>
                                <a href="/collections/women?filter.v.availability=1&amp;filter.v.price.gte=0&amp;filter.v.price.lte=975.00&amp;sort_by=best-selling"
                                    class="active-facets__button">
                                    Out of stock
                                    <i class="fa-solid fa-xmark"></i>
                                </a>
                            </div>
                            <div>
                                <a href="/collections/women?filter.v.availability=1&amp;filter.v.availability=0&amp;sort_by=best-selling"
                                    class="active-facets__button reset_price">
                                    <span class="min_price"><span class="money"
                                            data-currency-usd="$0.00">$0.00</span></span>-<span class="max_price"><span
                                            class="money" data-currency-usd="$975.00">$975.00</span></span>
                                    <i class="fa-solid fa-xmark"></i>
                                </a>
                            </div>
                        </div>
                        <div class="js-filter" data-index="1">
                            <div class="facets__label position-relative" @click="toggleShow('availabel')"
                                :class="{ act: isAvailale }">
                                Availability</div>
                            <div class="facets__content" :class="{ show: isAvailale }">
                                <ul class="facets__list list-unstyled pt-10 mb-30" role="list">
                                    <li class="list-menu__item facets__item">
                                        <label for="Filter-Availability-1"
                                            class="facet-checkbox d-flex align-items-center">
                                            <input type="checkbox" name="filter.v.availability" value="1"
                                                id="Filter-Availability-1" checked="" class="custom-checkbox">
                                            <span class="filter-option-value">In stock</span>
                                            <span class="value_count">6</span>
                                        </label>
                                    </li>
                                    <li class="list-menu__item facets__item">
                                        <label for="Filter-Availability-2"
                                            class="facet-checkbox d-flex align-items-center">
                                            <input type="checkbox" name="filter.v.availability" value="0"
                                                id="Filter-Availability-2" checked="">
                                            <span class="custom-checkbox">

                                                <i class="zmdi zmdi-check"></i>

                                            </span>
                                            <span class="filter-option-value">Out of stock</span>
                                            <span class="value_count">2</span>
                                        </label>
                                    </li>
                                </ul>
                                <div class="d-flex justify-content-end pb-30">
                                    <div>
                                        <a href="/collections/women?filter.v.price.gte=0&amp;filter.v.price.lte=975.00&amp;sort_by=best-selling"
                                            class="facets__reset">
                                            Reset
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="js-filter" data-index="2">
                            <div class="facets__label position-relative" @click="toggleShow('proType')"
                                :class="{ act: isProType }">
                                PRODUCT TYPE</div>
                            <div class="facets__content" :class="{ show: isProType }">
                                <ul class="facets__list list-unstyled pt-10 mb-30" role="list">
                                    <li class="list-menu__item facets__item">
                                        <label for="Filter-Availability-1"
                                            class="facet-checkbox d-flex align-items-center">
                                            <input type="checkbox" name="filter.v.availability" value="1"
                                                id="Filter-Availability-1" checked="" class="custom-checkbox">
                                            <span class="filter-option-value">Men</span>
                                            <span class="value_count">6</span>
                                        </label>
                                    </li>
                                    <li class="list-menu__item facets__item">
                                        <label for="Filter-Availability-2"
                                            class="facet-checkbox d-flex align-items-center">
                                            <input type="checkbox" name="filter.v.availability" value="0"
                                                id="Filter-Availability-2" checked="">
                                            <span class="custom-checkbox">

                                                <i class="zmdi zmdi-check"></i>

                                            </span>
                                            <span class="filter-option-value">Summer</span>
                                            <span class="value_count">2</span>
                                        </label>
                                    </li>
                                </ul>
                                <div class="d-flex justify-content-end pb-30">
                                    <div>
                                        <a href="/collections/women?filter.v.price.gte=0&amp;filter.v.price.lte=975.00&amp;sort_by=best-selling"
                                            class="facets__reset">
                                            Reset
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="js-filter" data-index="3">
                            <div class="facets__label position-relative" @click="toggleShow('brand')"
                                :class="{ act: isBrand }">
                                BRAND</div>
                            <div class="facets__content" :class="{ show: isBrand }">
                                <ul class="facets__list list-unstyled pt-10 mb-30" role="list">
                                    <li class="list-menu__item facets__item">
                                        <label for="Filter-Availability-1"
                                            class="facet-checkbox d-flex align-items-center">
                                            <input type="checkbox" name="filter.v.availability" value="1"
                                                id="Filter-Availability-1" checked="" class="custom-checkbox">
                                            <span class="filter-option-value">In stock</span>
                                            <span class="value_count">6</span>
                                        </label>
                                    </li>
                                    <li class="list-menu__item facets__item">
                                        <label for="Filter-Availability-2"
                                            class="facet-checkbox d-flex align-items-center">
                                            <input type="checkbox" name="filter.v.availability" value="0"
                                                id="Filter-Availability-2" checked="">
                                            <span class="custom-checkbox">

                                                <i class="zmdi zmdi-check"></i>

                                            </span>
                                            <span class="filter-option-value">Out of stock</span>
                                            <span class="value_count">2</span>
                                        </label>
                                    </li>
                                </ul>
                                <div class="d-flex justify-content-end pb-30">
                                    <div>
                                        <a href="/collections/women?filter.v.price.gte=0&amp;filter.v.price.lte=975.00&amp;sort_by=best-selling"
                                            class="facets__reset">
                                            Reset
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="facet-filters sorting d-none">
                            <select name="sort_by">
                                <option value="manual">Featured</option>
                                <option value="best-selling" selected="selected">Best selling</option>
                                <option value="title-ascending">Alphabetically, A-Z</option>
                                <option value="title-descending">Alphabetically, Z-A</option>
                                <option value="price-ascending">Price, low to high</option>
                                <option value="price-descending">Price, high to low</option>
                                <option value="created-ascending">Date, old to new</option>
                                <option value="created-descending">Date, new to old</option>
                            </select>
                        </div>
                    </div>
                </form>
            </facet-filters-form>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isAvailale: true,
            isProType: true,
            isBrand: true,
        }
    },
    methods: {
        toggleShow(name) {
            if (name === 'availabel') {
                this.isAvailale = !this.isAvailale
            }
            if (name === 'proType') {
                this.isProType = !this.isProType
            }
            if (name === 'brand') {
                this.isBrand = !this.isBrand
            }
        }
    }
}
</script>
<style lang="scss">
.collection-filters {

    #FacetFiltersForm {
        text-align: left;

        .headingfilter {
            border-bottom: 1px solid #e9e9e9;
            padding-bottom: 11px;

            i {
                font-size: 18px;
                margin-right: 6px;
            }

            span {
                font-weight: 800;
                font-size: 20px;
                text-transform: uppercase;
                line-height: 28px;
                color: #222222;
            }
        }

        .active-facets {
            padding: 30px 0;

            a {
                color: #666666;
                font-size: 16px;
            }

            .active-facets__button {
                display: inline-block;
                font-weight: 600;
                margin-left: auto;
                margin-right: 10px;
                font-size: 16px;

                i {
                    margin-right: 10px;
                    font-size: 17px;
                }
            }

            .active-facets__button.btn--clear--all {
                text-transform: uppercase;
                font-weight: 800;
                border: none;
                margin-bottom: 0;
                padding: 0;
                display: inline-flex;
            }

            .active-facets__button:not(.btn--clear--all) {
                border: 1px solid #e0e0e0;
                border-radius: 20px;
                padding: 9px 10px 5px;
                font-size: 12px;
                margin-top: 3px;
                margin-bottom: 3px;
                transition: 0.2s ease-in;

                i {
                    margin-left: 5px;
                    font-size: 12px;
                }
            }

            .active-facets__button:not(.btn--clear--all):hover {
                color: #ee5a20;
                border-color: #ee5a20;
            }
        }

        .js-filter {
            .facets__label {
                color: #222222;
                font-size: 14px;
                font-weight: 800;
                text-transform: uppercase;
                margin-bottom: 20px;
                cursor: pointer;
                padding-top: 3px;
            }

            .facets__label::after,
            .facets__label::before {
                content: "";
                position: absolute;
                top: 50%;
                background-color: #222222;
                transition: all 0.5s;
            }

            .facets__label::before {
                width: 10px;
                height: 2px;
                right: 0;
                transform: translateY(-50%);
            }

            .facets__label::after {
                width: 2px;
                height: 10px;
                right: 4px;
                transform: translateY(-50%) rotate(0);
            }


            .facets__content {
                display: none;
                height: 0;
                transition: 2s ease-in;
                height: fit-content;

                .facets__list {
                    li {
                        label {
                            input {
                                background-color: #000;
                                border-color: #000;
                                background: #fff;
                                border-radius: 1px;
                                width: 16px;
                                height: 16px;
                                border: 1px solid #dbdbdb;
                                position: relative;
                                display: inline-block;
                                vertical-align: middle;
                                margin-right: 15px;
                                cursor: pointer;
                                text-align: center;
                            }

                            span {
                                font-weight: 400;
                                color: #222222;
                                cursor: pointer;
                                font-size: 16px;
                            }

                            span.value_count {
                                margin-left: auto;
                                font-size: 16px;
                                font-weight: 600;
                                color: #222222;
                            }
                        }
                    }
                }

                .facets__reset {
                    border-radius: 3px;
                    padding: 7px 10px 5px;
                    font-size: 14px;
                    background-color: #dcdcdc;
                    color: #000;
                }

                .facets__reset:hover {
                    background-color: #666666;
                    color: #fff;
                }
            }

            .facets__content.show {
                height: fit-content;
                display: block !important;
            }
        }

        .facets__label.act::before {
            transform: translateY(-50%) rotate(-180deg);
        }

        .facets__label.act::after {
            transform: translateY(-50%) rotate(-90deg);
        }
    }
}
</style>