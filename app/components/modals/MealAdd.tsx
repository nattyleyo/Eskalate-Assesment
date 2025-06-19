"use client";

import { useState } from "react";

interface MealAddProps {
  onClose: () => void;
  onAdd: (meal: {
    name: string;
    rating: number;
    img: string;
    vendor: string;
    logo: string;
    status: "open" | "close";
  }) => void;
}

export default function MealAdd({ onClose, onAdd }: MealAddProps) {
  const [formData, setFormData] = useState({
    name: "",
    rating: 0,
    img: "",
    vendor: "",
    logo: "",
    status: "open" as "open" | "close",
  });
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "rating" ? parseFloat(value) || 0 : value,
    }));
    if (name === "name" && value.trim() === "")
      setError("Food name is required");
    else setError(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setError("Food name is required");
      return;
    }
    onAdd(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md relative shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-700 hover:text-gray-700"
        >
          ✕
        </button>
        <h2 className="text-xl font-semibold text-center mb-4 text-yellow-600">
          Add a meal
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Food name"
              className="w-full p-2 border rounded  placeholder:text-gray-400 placeholder:font-normal"
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>
          <div>
            <input
              type="number"
              name="rating"
              value={formData.rating || ""}
              onChange={handleChange}
              placeholder="Food rating"
              className="w-full p-2 border rounded placeholder:text-gray-400 placeholder:font-normal"
              min="0"
              max="5"
              step="0.1"
            />
          </div>
          <div>
            <input
              type="text"
              name="img"
              value={formData.img}
              onChange={handleChange}
              placeholder="Food image link"
              className="w-full p-2 border rounded placeholder:text-gray-400 placeholder:font-normal"
            />
          </div>
          <div>
            <input
              type="text"
              name="vendor"
              value={formData.vendor}
              onChange={handleChange}
              placeholder="Restaurant name"
              className="w-full p-2 border rounded placeholder:text-gray-400 placeholder:font-normal"
            />
          </div>
          <div>
            <input
              type="text"
              name="logo"
              value={formData.logo}
              onChange={handleChange}
              placeholder="Restaurant logo link"
              className="w-full p-2 border rounded placeholder:text-gray-400 placeholder:font-normal"
            />
          </div>
          <div>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="open">open</option>
              <option value="close">close</option>
            </select>
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-yellow-400 text-white px-6 py-2 rounded-full hover:bg-yellow-500 transition"
            >
              Add
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-200 px-6 py-2 rounded-full hover:bg-gray-300 transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
