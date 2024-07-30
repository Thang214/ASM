import { useMutation, useQueryClient } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { IProduct } from "../interface/product";
import {
  createProduct,
  deleteProduct,
  updateProduct,
} from "../service/product";
type useProductMutationProps = {
  action: "CREATE" | "UPDATE" | "DELETE";
};
type Inputs = {
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  discount: number;
  quantity: number;
};
const useProductMutation = ({ action }: useProductMutationProps) => {
  const form = useForm<Inputs>({
    defaultValues: {
      name: "",
      category: "",
      price: 0,
      image: "",
      description: "",
      discount: 0,
      quantity: 0,
    },
  });
  const queryClient = useQueryClient();
  const { mutate, ...rest } = useMutation({
    mutationFn: async (product: IProduct) => {
      switch (action) {
        case "CREATE":
          await createProduct(product);
          break;
        case "UPDATE":
          await updateProduct(product);
          break;
        case "DELETE":
          await deleteProduct(product.id!);
          break;
        default:
          return null;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["PRODUCT_KEY"],
      });
    },
  });
  const onSubmit: SubmitHandler<Inputs> = (product) => {
    mutate(product);
  };

  return { mutate, form, onSubmit, ...rest };
};
export default useProductMutation;
