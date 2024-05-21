import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   products: [
      {
         id: 1,
         name: "Barberton Daisy",
         img: "https://atlas-content-cdn.pixelsquid.com/stock-images/potted-plant-flower-pot-mdm41mF-600.jpg",
         price: "119.00",
         about: "The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit.Donec ac tempus ante.Fusce ultricies massa massa.Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi.Cras neque metus, consequat et blandit et, luctus a nunc.Etiam gravida vehicula tellus, in imperdiet ligula euismod eget.The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. ",
         size: "Large",
         category: "House Plants",
      },
      {
         id: 2,
         name: "Angel Wing Begonia",
         img: "https://atlas-content-cdn.pixelsquid.com/stock-images/potted-plant-flower-pot-rAGd4O2-600.jpg",
         price: "169.00",
         about: "The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit.Donec ac tempus ante.Fusce ultricies massa massa.Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi.Cras neque metus, consequat et blandit et, luctus a nunc.Etiam gravida vehicula tellus, in imperdiet ligula euismod eget.The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. ",
         size: "small",
         category: "Potter Plants",
      },
      {
         id: 3,
         name: "African Violet",
         img: "https://atlas-content-cdn.pixelsquid.com/stock-images/house-plant-flower-pot-a86LEY0-600.jpg",
         price: "199.00",
         about: "The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit.Donec ac tempus ante.Fusce ultricies massa massa.Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi.Cras neque metus, consequat et blandit et, luctus a nunc.Etiam gravida vehicula tellus, in imperdiet ligula euismod eget.The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. ",
         size: "Medium",
         category: "Seeds",
      },
      {
         id: 4,
         name: "Beach Spider Lily",
         img: "https://atlas-content-cdn.pixelsquid.com/stock-images/house-plant-flower-pot-a86LEY0-600.jpg",
         price: "129.00",
         about: "The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit.Donec ac tempus ante.Fusce ultricies massa massa.Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi.Cras neque metus, consequat et blandit et, luctus a nunc.Etiam gravida vehicula tellus, in imperdiet ligula euismod eget.The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. ",
         size: "Large",
         category: "Small Plants",
      },
      {
         id: 5,
         name: "Blushing Bromeliad",
         img: "https://atlas-content-cdn.pixelsquid.com/stock-images/house-plant-flower-pot-a86LEY0-600.jpg",
         price: "139.00",
         about: "The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit.Donec ac tempus ante.Fusce ultricies massa massa.Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi.Cras neque metus, consequat et blandit et, luctus a nunc.Etiam gravida vehicula tellus, in imperdiet ligula euismod eget.The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. ",
         size: "small",
         category: "Big Plants",
      },
      {
         id: 6,
         name: "Angel Wing Begonia",
         img: "https://atlas-content-cdn.pixelsquid.com/stock-images/potted-plant-flower-pot-mdm41mF-600.jpg",
         price: "169.00",
         about: "The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit.Donec ac tempus ante.Fusce ultricies massa massa.Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi.Cras neque metus, consequat et blandit et, luctus a nunc.Etiam gravida vehicula tellus, in imperdiet ligula euismod eget.The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. ",
         size: "small",
         category: "Potter Plants",
      },
      {
         id: 7,
         name: "African Violet",
         img: "https://atlas-content-cdn.pixelsquid.com/stock-images/potted-plant-flower-pot-rAGd4O2-600.jpg",
         price: "199.00",
         about: "The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit.Donec ac tempus ante.Fusce ultricies massa massa.Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi.Cras neque metus, consequat et blandit et, luctus a nunc.Etiam gravida vehicula tellus, in imperdiet ligula euismod eget.The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. ",
         size: "Medium",
         category: "Seeds",
      },
      {
         id: 8,
         name: "Beach Spider Lily",
         img: "https://atlas-content-cdn.pixelsquid.com/stock-images/house-plant-flower-pot-a86LEY0-600.jpg",
         price: "129.00",
         about: "The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit.Donec ac tempus ante.Fusce ultricies massa massa.Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi.Cras neque metus, consequat et blandit et, luctus a nunc.Etiam gravida vehicula tellus, in imperdiet ligula euismod eget.The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. ",
         size: "Large",
         category: "Small Plants",
      },
      {
         id: 9,
         name: "Blushing Bromeliad",
         img: "https://atlas-content-cdn.pixelsquid.com/stock-images/potted-plant-flower-pot-rAGd4O2-600.jpg",
         price: "139.00",
         about: "The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit.Donec ac tempus ante.Fusce ultricies massa massa.Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi.Cras neque metus, consequat et blandit et, luctus a nunc.Etiam gravida vehicula tellus, in imperdiet ligula euismod eget.The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. ",
         size: "small",
         category: "Big Plants",
      },
   ],
   filterProduct: [
      {
         id: 1,
         name: "Barberton Daisy",
         img: "https://atlas-content-cdn.pixelsquid.com/stock-images/potted-plant-flower-pot-mdm41mF-600.jpg",
         price: "119.00",
         about: "The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit.Donec ac tempus ante.Fusce ultricies massa massa.Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi.Cras neque metus, consequat et blandit et, luctus a nunc.Etiam gravida vehicula tellus, in imperdiet ligula euismod eget.The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. ",
         size: "Large",
         category: "House Plants",
      },
      {
         id: 2,
         name: "Angel Wing Begonia",
         img: "https://atlas-content-cdn.pixelsquid.com/stock-images/potted-plant-flower-pot-rAGd4O2-600.jpg",
         price: "169.00",
         about: "The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit.Donec ac tempus ante.Fusce ultricies massa massa.Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi.Cras neque metus, consequat et blandit et, luctus a nunc.Etiam gravida vehicula tellus, in imperdiet ligula euismod eget.The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. ",
         size: "small",
         category: "Potter Plants",
      },
      {
         id: 3,
         name: "African Violet",
         img: "https://atlas-content-cdn.pixelsquid.com/stock-images/house-plant-flower-pot-a86LEY0-600.jpg",
         price: "199.00",
         about: "The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit.Donec ac tempus ante.Fusce ultricies massa massa.Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi.Cras neque metus, consequat et blandit et, luctus a nunc.Etiam gravida vehicula tellus, in imperdiet ligula euismod eget.The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. ",
         size: "Medium",
         category: "Seeds",
      },
      {
         id: 4,
         name: "Beach Spider Lily",
         img: "https://atlas-content-cdn.pixelsquid.com/stock-images/potted-plant-flower-pot-rAGd4O2-600.jpg",
         price: "129.00",
         about: "The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit.Donec ac tempus ante.Fusce ultricies massa massa.Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi.Cras neque metus, consequat et blandit et, luctus a nunc.Etiam gravida vehicula tellus, in imperdiet ligula euismod eget.The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. ",
         size: "Large",
         category: "Small Plants",
      },
      {
         id: 5,
         name: "Blushing Bromeliad",
         img: "https://atlas-content-cdn.pixelsquid.com/stock-images/house-plant-flower-pot-a86LEY0-600.jpg",
         price: "139.00",
         about: "The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit.Donec ac tempus ante.Fusce ultricies massa massa.Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi.Cras neque metus, consequat et blandit et, luctus a nunc.Etiam gravida vehicula tellus, in imperdiet ligula euismod eget.The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. ",
         size: "small",
         category: "Big Plants",
      },
      {
         id: 6,
         name: "Angel Wing Begonia",
         img: "https://atlas-content-cdn.pixelsquid.com/stock-images/potted-plant-flower-pot-mdm41mF-600.jpg",
         price: "169.00",
         about: "The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit.Donec ac tempus ante.Fusce ultricies massa massa.Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi.Cras neque metus, consequat et blandit et, luctus a nunc.Etiam gravida vehicula tellus, in imperdiet ligula euismod eget.The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. ",
         size: "small",
         category: "Potter Plants",
      },
      {
         id: 7,
         name: "African Violet",
         img: "https://atlas-content-cdn.pixelsquid.com/stock-images/potted-plant-flower-pot-rAGd4O2-600.jpg",
         price: "199.00",
         about: "The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit.Donec ac tempus ante.Fusce ultricies massa massa.Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi.Cras neque metus, consequat et blandit et, luctus a nunc.Etiam gravida vehicula tellus, in imperdiet ligula euismod eget.The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. ",
         size: "Medium",
         category: "Seeds",
      },
      {
         id: 8,
         name: "Beach Spider Lily",
         img: "https://atlas-content-cdn.pixelsquid.com/stock-images/house-plant-flower-pot-a86LEY0-600.jpg",
         price: "129.00",
         about: "The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit.Donec ac tempus ante.Fusce ultricies massa massa.Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi.Cras neque metus, consequat et blandit et, luctus a nunc.Etiam gravida vehicula tellus, in imperdiet ligula euismod eget.The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. ",
         size: "Large",
         category: "Small Plants",
      },
      {
         id: 9,
         name: "Blushing Bromeliad",
         img: "https://atlas-content-cdn.pixelsquid.com/stock-images/potted-plant-flower-pot-mdm41mF-600.jpg",
         price: "139.00",
         about: "The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit.Donec ac tempus ante.Fusce ultricies massa massa.Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi.Cras neque metus, consequat et blandit et, luctus a nunc.Etiam gravida vehicula tellus, in imperdiet ligula euismod eget.The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. ",
         size: "small",
         category: "Big Plants",
      },
   ],
   korzinaProduct: [],
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
         state.filteredData = payload;
      },

      updateFilteredData: (state, { payload }) => {
         state.filterProduct = payload;
      },

      korzinaProd: (state, { payload }) => {
         state.korzinaProduct = payload;
      },
   },
});

export default userSlice.reducer;

export const { addProduct, saveDataToState, updateFilteredData, korzinaProd } =
   userSlice.actions;
