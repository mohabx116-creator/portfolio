import dashboardOverview from '../assets/dashboard-overview.png'
import restaurantHome from '../assets/restaurant-home.png'
import restaurantMenuManagement from '../assets/restaurant-menu-management.png'
import restaurantOrdersManagement from '../assets/restaurant-orders-management.png'
import fashionHome from '../assets/fashion-home-screen.png'
import fashionListing from '../assets/fashion-listing-screen.png'
import fashionProduct from '../assets/fashion-product-screen.png'
import siemexWebsiteCover from '../assets/siemex-website-cover.jpg'
import restodashLiteLoginCover from '../assets/restodash-lite-login-cover.png'
import salmaHaniPortfolioCover from '../assets/salma-hani-portfolio-cover.png'
import megawattCover from '../assets/megawatt-cover.png'
import flowstoneCover from '../assets/flowstone-cover.png'
import dalilsubhiHero from '../assets/dalilsubhi-hero.png'
import dalilsubhiHome from '../assets/dalilsubhi-home.webp'
import dalilsubhiProperties from '../assets/dalilsubhi-properties.webp'
import dalilsubhiLands from '../assets/dalilsubhi-lands.webp'
import dalilsubhiMobile from '../assets/dalilsubhi-mobile.webp'
import orderatHero from '../assets/orderat-hero.webp'
import orderatRoutes from '../assets/orderat-routes.webp'
import orderatPricing from '../assets/orderat-pricing.webp'
import orderatCta from '../assets/orderat-cta.webp'
import orderatMobile from '../assets/orderat-mobile.webp'

export const projectAssets = {
  dalilSubhi: {
    cover: dalilsubhiHero,
    gallery: [dalilsubhiHero, dalilsubhiHome, dalilsubhiProperties, dalilsubhiLands, dalilsubhiMobile],
  },
  orderat: {
    cover: orderatHero,
    gallery: [orderatHero, orderatRoutes, orderatPricing, orderatCta, orderatMobile],
  },
  megawatt: {
    cover: megawattCover,
    gallery: [megawattCover],
  },
  flowstone: {
    cover: flowstoneCover,
    gallery: [flowstoneCover],
  },
  dashboard: {
    cover: dashboardOverview,
    gallery: [dashboardOverview, restaurantHome],
  },
  restaurantGallery: {
    cover: restaurantHome,
    screens: {
      home: restaurantHome,
      overview: dashboardOverview,
      menu: restaurantMenuManagement,
      orders: restaurantOrdersManagement,
    },
    gallery: [restaurantHome, dashboardOverview, restaurantMenuManagement, restaurantOrdersManagement],
  },
  fashion: {
    cover: fashionHome,
    gallery: [fashionHome, fashionListing, fashionProduct],
  },
  siemex: {
    cover: siemexWebsiteCover,
    gallery: [siemexWebsiteCover],
  },
  dockerRestaurantDashboard: {
    cover: restodashLiteLoginCover,
    gallery: [restodashLiteLoginCover, dashboardOverview, restaurantMenuManagement, restaurantOrdersManagement],
  },
  salmaHaniPortfolio: {
    cover: salmaHaniPortfolioCover,
    gallery: [salmaHaniPortfolioCover],
  },
  fashionGallery: {
    cover: fashionProduct,
    screens: {
      home: fashionHome,
      listing: fashionListing,
      details: fashionProduct,
    },
    gallery: [fashionHome, fashionListing, fashionProduct],
  },
}
