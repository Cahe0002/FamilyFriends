"use server";
import { revalidatePath } from "next/cache";

const API = "https://api.thedogapi.com/v1";

const headers = {
  "x-api-key": process.env.API_KEY,
  "Content-Type": "application/json",
};

export const toggleFavourite = async (imageId, favouriteId) => {
  const response = favouriteId
    ? await fetch(`${API}/favourites/${favouriteId}`, {
        method: "DELETE",
        headers,
      })
    : await fetch(`${API}/favourites`, {
        method: "POST",
        headers,
        body: JSON.stringify({ image_id: imageId }),
      });

  revalidatePath("/", "layout");
};
