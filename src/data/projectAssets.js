import dashboardOverview from '../assets/dashboard-overview.png'
import restaurantHome from '../assets/restaurant-home.png'
import fashionHome from '../assets/fashion-home-screen.png'
import fashionListing from '../assets/fashion-listing-screen.png'
import fashionProduct from '../assets/fashion-product-screen.png'

export const projectAssets = {
  dashboard: {
    cover: dashboardOverview,
    gallery: [dashboardOverview, restaurantHome],
  },
  fashion: {
    cover: fashionHome,
    gallery: [fashionHome, fashionListing, fashionProduct],
  },
}
