import AuthWrapper from "@features/Auth/components/AuthWrapper";
import { FC } from "react";
import useLogout, { Props, ReceivedProps } from "./hooks";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/react";

const LogoutLayout: FC<Props> = ({ onLogout, onClose }) => {
  return (
    <AuthWrapper>
      <Modal
        isDismissable={false}
        isKeyboardDismissDisabled={true}
        isOpen={true}
      >
        <ModalContent>
          <>
            <ModalHeader className="flex flex-col gap-1">Xác nhận</ModalHeader>
            <ModalBody>Bạn chắc chắn đăng xuất khỏi hệ thống?</ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Đóng
              </Button>
              <Button color="primary" onPress={onLogout}>
                Xác nhận
              </Button>
            </ModalFooter>
          </>
        </ModalContent>
      </Modal>
    </AuthWrapper>
  );
};

const Logout: FC<ReceivedProps> = (props) => (
  <LogoutLayout {...useLogout(props)} />
);

export default Logout;
