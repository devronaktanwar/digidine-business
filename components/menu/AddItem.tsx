"use client";
import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Minus, Plus, Upload, X } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import Image from "next/image";
import { Card } from "../ui/card";

const AddItem = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    label: "",
    description: "",
    originalPrice: "",
    sellingPrice: "",
    type: "VEG",
    category: "",
    image: null,
    addons: [],
  });

  console.log({ formData });
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

  const updateAddon = (index: number, field: keyof Addon, value: string) => {
    setFormData((prev) => ({
      ...prev,
      addons: prev.addons.map((addon, i) =>
        i === index ? { ...addon, [field]: value } : addon
      ),
    }));
  };
  const removeAddon = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      addons: prev.addons.filter((_, i) => i !== index),
    }));
  };
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div>
      <form className="space-y-3">
        <div className="grid grid-cols-3 gap-3">
          <div className="space-y-2 col-span-2">
            <Label>Item Name</Label>
            <Input
              type="text"
              className="w-full"
              name="label"
              value={formData.label}
              onChange={handleInputChange}
              placeholder="e.g., Margherita Pizza"
            />
          </div>
          <div className="space-y-2 col-span-1 w-full">
            <Label>Category</Label>
            <Select
              value={formData.category}
              onValueChange={(value) => {
                setFormData((prev) => ({ ...prev, category: value }));
              }}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent className="w-full">
                {menuCategories.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="space-y-2">
          <Label>Description</Label>
          <Textarea
            id="description"
            name="description"
            placeholder="Describe your menu item, ingredients, and what makes it special..."
            className="min-h-[100px] w-full"
            value={formData.description}
            onChange={handleInputChange}
          />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-2">
            <Label>Original Price</Label>
            <Input
              type="number"
              className="w-full"
              id="originalPrice"
              name="originalPrice"
              step="0.01"
              placeholder="0.00"
              value={formData.originalPrice}
              onChange={handleInputChange}
            />
          </div>
          <div className="space-y-2">
            <Label>Selling Price</Label>
            <Input
              className="w-full"
              id="sellingPrice"
              name="sellingPrice"
              type="number"
              step="0.01"
              placeholder="0.00"
              value={formData.sellingPrice}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label>Image</Label>
          <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-4">
            {!imagePreview ? (
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
            ) : (
              <div className="relative flex justify-center">
                <div className="relative w-48 h-48 rounded-lg overflow-hidden border">
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
                  className="absolute top-0 right-0"
                  onClick={removeImage}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
        </div>
        <div className="space-y-2">
          <Label>Type</Label>
          <RadioGroup
            defaultValue="VEG"
            className="flex cursor-pointer"
            onValueChange={(value) =>
              setFormData((prev) => ({ ...prev, type: value }))
            }
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="VEG" id="VEG" />
              <Label htmlFor="VEG">VEG</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="NON-VEG" id="NON-VEG" />
              <Label htmlFor="NON-VEG">NON-VEG</Label>
            </div>
          </RadioGroup>
        </div>
        <div className="space-y-2">
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
                  <div className="flex items-start justify-between">
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
                          updateAddon(index, "originalPrice", e.target.value)
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

        <div className="bg-white sticky bottom-0 py-3">
          <Button type="submit" className="w-full">
            Save
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddItem;
const menuCategories = [
  { value: "vegetarian", label: "Vegetarian" },
  { value: "vegan", label: "Vegan" },
  { value: "gluten-free", label: "Gluten Free" },
  { value: "dairy-free", label: "Dairy Free" },
  { value: "spicy", label: "Spicy" },
  { value: "healthy", label: "Healthy" },
  { value: "comfort-food", label: "Comfort Food" },
];
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
