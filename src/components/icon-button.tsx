import { ComponentProps } from "react";

interface IconButtonProps extends ComponentProps<"button"> {}

const IconButton = (props: IconButtonProps) => {
  return (
    <button
      className="text-blue hover:bg-blue cursor-pointer items-center justify-between rounded-md bg-gray-500 p-1.5 transition-colors duration-300 hover:text-gray-900"
      {...props}
    />
  );
};

export default IconButton;
