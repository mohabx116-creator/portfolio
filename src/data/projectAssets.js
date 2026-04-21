import dashboardOverview from '../assets/dashboard-overview.png'
import restaurantHome from '../assets/restaurant-home.png'
import restaurantMenuManagement from '../assets/restaurant-menu-management.png'
import restaurantOrdersManagement from '../assets/restaurant-orders-management.png'
import fashionHome from '../assets/fashion-home-screen.png'
import fashionListing from '../assets/fashion-listing-screen.png'
import fashionProduct from '../assets/fashion-product-screen.png'
import siemexWebsiteCover from '../assets/siemex-website-cover.jpg'

export const projectAssets = {
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
