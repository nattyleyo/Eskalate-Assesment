import axios from "axios";

const API_BASE_URL = "https://6852821e0594059b23cdd834.mockapi.io/Food";

// Type definitions
interface FoodItem {
  id?: string;
  createdAt: string;
  name: string;
  avator: string;
  rating: number;
  open: boolean;
  logo: string;
}

// 1. Get Featured Restaurants
export const getFeaturedRestaurants = async (): Promise<FoodItem[]> => {
  try {
    const response = await axios.get<FoodItem[]>(API_BASE_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching restaurants:", error);
    throw error;
  }
};

// 2. Create Food
export const createFood = async (
  foodData: Omit<FoodItem, "id">
): Promise<FoodItem> => {
  try {
    const response = await axios.post<FoodItem>(API_BASE_URL, foodData);
    return response.data;
  } catch (error) {
    console.error("Error creating food:", error);
    throw error;
  }
};

// 3. Update Food
export const updateFood = async (
  id: string,
  foodData: Partial<FoodItem>
): Promise<FoodItem> => {
  try {
    const response = await axios.put<FoodItem>(
      `${API_BASE_URL}/${id}`,
      foodData
    );
    return response.data;
  } catch (error) {
    console.error("Error updating food:", error);
    throw error;
  }
};

// 4. Delete Food
export const deleteFood = async (id: string): Promise<void> => {
  try {
    await axios.delete(`${API_BASE_URL}/${id}`);
  } catch (error) {
    console.error("Error deleting food:", error);
    throw error;
  }
};

// 5. Filter Foods by Name
export const filterFoods = async (searchParam: string): Promise<FoodItem[]> => {
  try {
    const response = await axios.get<FoodItem[]>(
      `${API_BASE_URL}?name=${searchParam}`
    );
    return response.data;
  } catch (error) {
    console.error("Error filtering foods:", error);
    throw error;
  }
};
