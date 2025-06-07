"use client";

import type React from "react";
import { useState } from "react";
import { Plus, Minus, Upload, X } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";

interface Addon {
  name: string;
  originalPrice: string;
  sellingPrice: string;
}

interface FormData {
  label: string;
  description: string;
  originalPrice: string;
  sellingPrice: string;
  type: string;
  category: string;
  image: File | null;
  addons: Addon[];
}

const menuTypes = [
  { value: "appetizer", label: "Appetizer" },
  { value: "main-course", label: "Main Course" },
  { value: "dessert", label: "Dessert" },
  { value: "beverage", label: "Beverage" },
  { value: "side-dish", label: "Side Dish" },
];

const menuCategories = [
  { value: "vegetarian", label: "Vegetarian" },
  { value: "vegan", label: "Vegan" },
  { value: "gluten-free", label: "Gluten Free" },
  { value: "dairy-free", label: "Dairy Free" },
  { value: "spicy", label: "Spicy" },
  { value: "healthy", label: "Healthy" },
  { value: "comfort-food", label: "Comfort Food" },
];

export default function AddItem() {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    label: "",
    description: "",
    originalPrice: "",
    sellingPrice: "",
    type: "",
    category: "",
    image: null,
    addons: [],
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({ ...prev, image: file }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setImagePreview(null);
    setFormData((prev) => ({ ...prev, image: null }));
    const fileInput = document.getElementById(
      "image-upload"
    ) as HTMLInputElement;
    if (fileInput) {
      fileInput.value = "";
    }
  };

  const addAddon = () => {
    setFormData((prev) => ({
      ...prev,
      addons: [
        ...prev.addons,
        { name: "", originalPrice: "", sellingPrice: "" },
      ],
    }));
  };

  const removeAddon = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      addons: prev.addons.filter((_, i) => i !== index),
    }));
  };

  const updateAddon = (index: number, field: keyof Addon, value: string) => {
    setFormData((prev) => ({
      ...prev,
      addons: prev.addons.map((addon, i) =>
        i === index ? { ...addon, [field]: value } : addon
      ),
    }));
  };

  const validateForm = (): boolean => {
    if (!formData.label.trim()) {
      toast.error("Please enter an item name");
      return false;
    }
    if (!formData.description.trim()) {
      toast.error("Please enter a description");
      return false;
    }
    if (!formData.originalPrice || Number(formData.originalPrice) <= 0) {
      toast.error("Please enter a valid original price");
      return false;
    }
    if (!formData.sellingPrice || Number(formData.sellingPrice) <= 0) {
      toast.error("Please enter a valid selling price");
      return false;
    }
    if (Number(formData.sellingPrice) > Number(formData.originalPrice)) {
      toast.error("Selling price cannot be higher than original price");
      return false;
    }
    if (!formData.type) {
      toast.error("Please select a type");
      return false;
    }
    if (!formData.category) {
      toast.error("Please select a category");
      return false;
    }
    if (!formData.image) {
      toast.error("Please upload an image");
      return false;
    }

    // Validate addons
    for (let i = 0; i < formData.addons.length; i++) {
      const addon = formData.addons[i];
      if (!addon.name.trim()) {
        toast.error(`Please enter a name for add-on #${i + 1}`);
        return false;
      }
      if (!addon.originalPrice || Number(addon.originalPrice) <= 0) {
        toast.error(`Please enter a valid original price for add-on #${i + 1}`);
        return false;
      }
      if (!addon.sellingPrice || Number(addon.sellingPrice) <= 0) {
        toast.error(`Please enter a valid selling price for add-on #${i + 1}`);
        return false;
      }
      if (Number(addon.sellingPrice) > Number(addon.originalPrice)) {
        toast.error(
          `Selling price cannot be higher than original price for add-on #${
            i + 1
          }`
        );
        return false;
      }
    }

    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const processedData = {
      ...formData,
      originalPrice: Number(formData.originalPrice),
      sellingPrice: Number(formData.sellingPrice),
      addons: formData.addons.map((addon) => ({
        name: addon.name,
        originalPrice: Number(addon.originalPrice),
        sellingPrice: Number(addon.sellingPrice),
      })),
    };

    toast.success("Menu item added successfully!", {
      description: `${formData.label} has been added to the menu with ${formData.addons.length} add-ons.`,
    });

    console.log("Form submitted:", processedData);

    // Reset form
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      label: "",
      description: "",
      originalPrice: "",
      sellingPrice: "",
      type: "",
      category: "",
      image: null,
      addons: [],
    });
    setImagePreview(null);
  };

  return (
    <div className="">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="label">Item Name</Label>
                <Input
                  id="label"
                  name="label"
                  placeholder="e.g., Margherita Pizza"
                  value={formData.label}
                  onChange={handleInputChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="type">Type</Label>
                <Select
                  value={formData.type}
                  onValueChange={(value) => handleSelectChange("type", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select item type" />
                  </SelectTrigger>
                  <SelectContent>
                    {menuTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                placeholder="Describe your menu item, ingredients, and what makes it special..."
                className="min-h-[100px]"
                value={formData.description}
                onChange={handleInputChange}
              />
              <p className="text-sm text-muted-foreground">
                Provide a detailed description that will entice customers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="originalPrice">Original Price ($)</Label>
                <Input
                  id="originalPrice"
                  name="originalPrice"
                  type="number"
                  step="0.01"
                  placeholder="0.00"
                  value={formData.originalPrice}
                  onChange={handleInputChange}
                />
                <p className="text-sm text-muted-foreground">
                  The regular price of the item.
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="sellingPrice">Selling Price ($)</Label>
                <Input
                  id="sellingPrice"
                  name="sellingPrice"
                  type="number"
                  step="0.01"
                  placeholder="0.00"
                  value={formData.sellingPrice}
                  onChange={handleInputChange}
                />
                <p className="text-sm text-muted-foreground">
                  The current selling price.
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select
                value={formData.category}
                onValueChange={(value) => handleSelectChange("category", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {menuCategories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <p className="text-sm text-muted-foreground">
                Choose the most appropriate category for dietary preferences.
              </p>
            </div>

            <div className="space-y-2">
              <Label>Item Image</Label>
              <div className="space-y-4">
                {!imagePreview ? (
                  <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6">
                    <div className="flex flex-col items-center justify-center space-y-2">
                      <Upload className="h-8 w-8 text-muted-foreground" />
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">
                          Click to upload or drag and drop
                        </p>
                        <p className="text-xs text-muted-foreground">
                          PNG, JPG, JPEG or WEBP (max 5MB)
                        </p>
                      </div>
                      <Input
                        id="image-upload"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageChange}
                      />
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() =>
                          document.getElementById("image-upload")?.click()
                        }
                      >
                        Choose File
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="relative">
                    <div className="relative w-full h-48 rounded-lg overflow-hidden border">
                      <Image
                        src={imagePreview || "/placeholder.svg"}
                        alt="Preview"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <Button
                      type="button"
                      variant="destructive"
                      size="sm"
                      className="absolute top-2 right-2"
                      onClick={removeImage}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </div>
              <p className="text-sm text-muted-foreground">
                Upload a high-quality image of your menu item.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-base font-medium">Add-ons</Label>
                  <p className="text-sm text-muted-foreground">
                    Optional extras customers can add to this item.
                  </p>
                </div>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={addAddon}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Add-on
                </Button>
              </div>

              {formData.addons.length > 0 && (
                <div className="space-y-4">
                  {formData.addons.map((addon, index) => (
                    <Card key={index} className="p-4">
                      <div className="flex items-start justify-between mb-4">
                        <h4 className="font-medium">Add-on #{index + 1}</h4>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => removeAddon(index)}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label>Name</Label>
                          <Input
                            placeholder="e.g., Extra Cheese"
                            value={addon.name}
                            onChange={(e) =>
                              updateAddon(index, "name", e.target.value)
                            }
                          />
                        </div>

                        <div className="space-y-2">
                          <Label>Original Price ($)</Label>
                          <Input
                            type="number"
                            step="0.01"
                            placeholder="0.00"
                            value={addon.originalPrice}
                            onChange={(e) =>
                              updateAddon(
                                index,
                                "originalPrice",
                                e.target.value
                              )
                            }
                          />
                        </div>

                        <div className="space-y-2">
                          <Label>Selling Price ($)</Label>
                          <Input
                            type="number"
                            step="0.01"
                            placeholder="0.00"
                            value={addon.sellingPrice}
                            onChange={(e) =>
                              updateAddon(index, "sellingPrice", e.target.value)
                            }
                          />
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              )}
            </div>

            <div className="flex gap-4 pt-4 sticky bottom-0 py-2 bg-white">
              <Button type="submit" className="flex-1">
                Add Menu Item
              </Button>
              <Button type="button" variant="outline" onClick={resetForm}>
                Reset Form
              </Button>
            </div>
          </form>
    </div>
  );
}
