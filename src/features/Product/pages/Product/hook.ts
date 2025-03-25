export type ReceivedProps = Record<string, any>;

const useProduct = (props: ReceivedProps) => {
  return {
    ...props,
  };
};

export type Props = ReturnType<typeof useProduct>;

export default useProduct;
