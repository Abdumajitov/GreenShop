import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   products: [
      {
         id: "1",
         name: "Barberton Daisy",
         img: "https://png.pngtree.com/png-vector/20240310/ourmid/pngtree-house-plants-on-pots-png-image_11931547.png",
         price: "119.00",
         size: "Large",
         category: "House Plants",
      },
      {
         id: "2",
         name: "Fin Wing Begonia",
         img: "https://atlas-content-cdn.pixelsquid.com/stock-images/potted-plant-flower-pot-rAGd4O2-600.jpg",
         price: "169.00",
         size: "Small",
         category: "Potter Plants",
      },
      {
         id: "3",
         name: "Japan Violet",
         img: "https://atlas-content-cdn.pixelsquid.com/stock-images/house-plant-flower-pot-a86LEY0-600.jpg",
         price: "199.00",
         size: "Medium",
         category: "Seeds",
      },
      {
         id: "4",
         name: "Flich Spider Lily",
         img: "https://png.pngtree.com/png-vector/20240207/ourmid/pngtree-indoor-plant-flowerpot-png-image_11669796.png",
         price: "129.00",
         size: "Large",
         category: "Small Plants",
      },
      {
         id: "5",
         name: "Blushing Bromeliad",
         img: "https://img.freepik.com/premium-photo/photo-modern-living-room-design-with-indoor-plants_763111-132519.jpg",
         price: "139.00",
         size: "Small",
         category: "Big Plants",
      },
      {
         id: "6",
         name: "Angel Wing Begonia",
         img: "https://atlas-content-cdn.pixelsquid.com/stock-images/potted-plant-flower-pot-mdm41mF-600.jpg",
         price: "169.00",
         size: "Small",
         category: "Potter Plants",
      },
      {
         id: "7",
         name: "African Violet",
         img: "https://atlas-content-cdn.pixelsquid.com/stock-images/potted-plant-flower-pot-rAGd4O2-600.jpg",
         price: "199.00",
         size: "Medium",
         category: "Seeds",
      },
      {
         id: "8",
         name: "Beach Spider Lily",
         img: "https://atlas-content-cdn.pixelsquid.com/stock-images/house-plant-flower-pot-a86LEY0-600.jpg",
         price: "129.00",
         size: "Large",
         category: "Small Plants",
      },
      {
         id: "9",
         name: "Lowish Bromeliad",
         img: "https://png.pngtree.com/png-vector/20240207/ourmid/pngtree-indoor-plant-flowerpot-png-image_11669796.png",
         price: "139.00",
         size: "Small",
         category: "Big Plants",
      },
      {
         id: "10",
         name: "larberton Daisy",
         img: "https://media1.popsugar-assets.com/files/thumbor/4jFr1uUsva5CP-syTZn53d7Qfsg=/fit-in/600x600/filters:format_auto():upscale()/2020/06/03/797/n/1922794/6a62cb3175db0d3f_netimgUYnly2.jpg",
         price: "119.00",
         size: "Large",
         category: "House Plants",
      },
      {
         id: "11",
         name: "Grow Spider Plant",
         img: "https://i5.walmartimages.com/asr/43869a3a-6311-42b6-b196-dc61d304ce8a.09084ca5b2b6d971df265b42b60578bc.jpeg?odnHeight=320&odnWidth=320&odnBg=FFFFFF",
         price: "169.00",
         size: "Small",
         category: "House Plants",
      },
      {
         id: "12",
         name: "Belar Violet",
         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlstUdtBpPQs6hV1OqQQFKePYUBK17TPniEG6N4jSCXid6wNTWkaHf2HrfBLcOc6SabB4&usqp=CAU",
         price: "199.00",
         size: "Medium",
         category: "Seeds",
      },
      {
         id: "13",
         name: "CLap Spider Lily",
         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVib-jAOK3rM61Ls1giB29vpye4tOXpYFuvxPvcnjOAEpnxWsfUO2apV5JSvFQXHrmYzo&usqp=CAU",
         price: "129.00",
         size: "Large",
         category: "Small Plants",
      },
      {
         id: "14",
         name: "Polsh Bromeliad",
         img: "https://chive.ca/cdn/shop/files/4MONSTERA-5.jpg?v=1714399066&width=2000",
         price: "139.00",
         size: "Small",
         category: "Big Plants",
      },
      {
         id: "15",
         name: "Wern Begonia",
         img: "https://media.istockphoto.com/id/1380361370/photo/decorative-banana-plant-in-concrete-vase-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=eYADMQ9dXTz1mggdfn_exN2gY61aH4fJz1lfMomv6o4=",
         price: "169.00",
         size: "Small",
         category: "Potter Plants",
      },
      {
         id: "16",
         name: "Mexio Violet",
         img: "https://i5.walmartimages.com/seo/United-Nursery-Live-Monstera-Deliciosa-Indoor-Plant-in-10-inch-Grower-Pot-Medium-to-Bright-Light_9a723af4-84b4-40d4-a30f-6d46f44b1abf.5d9d92f1622bd67ad52ddc481ec9c270.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
         price: "199.00",
         size: "Medium",
         category: "Seeds",
      },
      {
         id: "17",
         name: "United Nursery Live",
         img: "https://hortology.co.uk/cdn/shop/files/Pachira-aquatica-Multi-Stem-Money-Tree-17x65cm-Puk-Refined-Planter-Natural-White-20x20cm_c63e6e4b-32ac-4a40-ac8f-584306f55060_1600x.jpg?v=1690370808",
         price: "129.00",
         size: "Large",
         category: "Small Plants",
      },
      {
         id: "18",
         name: "Pachira aquatica",
         img: "https://hortology.co.uk/cdn/shop/files/Pachira-aquatica-Money-Tree-24x120cm-Lisbon-Plant-Pot-Sage-26x26cm_7af30812-8d3b-408f-b3a0-46e25dfe65f3_1200x.jpg?v=1717662443",
         price: "139.00",
         size: "Large",
         category: "Big Plants",
      },
   ],
   filterProduct: [],
   korzinaProduct: [],
   checkProd: [],
   seracher: [],
};

const userSlice = createSlice({
   name: "products",
   initialState,
   reducers: {
      addProduct: (state, { payload }) => {
         state.products = [...state.products, payload];
      },
      saveDataToState: (state, { payload }) => {
         state.products = payload;
      },
      updateUser: (state, { payload }) => {
         state.products = payload
      },
      updateFilteredData: (state, { payload }) => {
         state.filterProduct = payload;
      },

      korzinaProd: (state, { payload }) => {
         state.korzinaProduct = payload;
      },

      saleProduct: (state, { payload }) => {
         state.checkProd = payload
      },

      searchDet: (state, { payload }) => {
         state.seracher = payload
      },
   },
});

export default userSlice.reducer;

export const { addProduct, saveDataToState, updateUser, updateFilteredData, korzinaProd, saleProduct, searchDet } =
   userSlice.actions;
