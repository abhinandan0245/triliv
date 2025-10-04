import React from "react";

import { useGetAllBannersQuery } from "../../../services/homepage/banner3Api";

const BannerTwo = () => {
  const { data, error, isLoading } = useGetAllBannersQuery();

 

  // const banner = data?.banners?.[0]; // ✅ FIX: Access nested banners array
  const banner = data?.[0]; 



  
};

export default BannerTwo;
