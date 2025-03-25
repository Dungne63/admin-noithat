export type ReceivedProps = Record<string, any>;

const useOrder = (props: ReceivedProps) => {
  return {
    ...props,
  };
};

export type Props = ReturnType<typeof useOrder>;

export default useOrder;
