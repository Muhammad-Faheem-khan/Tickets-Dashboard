import React, { useEffect } from "react";
import { Modal, Form, Input, message, Select } from "antd";
import { serviceOptions } from "../../utils/constants";

export const AddTicketModal = (props) => {
  const { modal, onConfirm, toggleModal, ticket, onClose, type } = props;

  const [messageApi, contextHolder] = message.useMessage();
  const { TextArea } = Input;
  const [form] = Form.useForm();

  useEffect(() => {
    if (ticket && type === "edit") {
      form.setFieldsValue(ticket);
    } else {
      form.resetFields();
    }
  }, [ticket, type, form]);

  const onCancel = () => {
    onClose();
    toggleModal();
    form.resetFields();
  };

  return (
    <Modal
      getContainer={false}
      title={type === "edit" ? "Update Ticket" : "Add New Ticket"}
      open={modal}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onConfirm({ ...ticket, ...values }, type);
          })
          .catch((info) => {
            messageApi.open({
              type: "error",
              content: "Fields Validation Failed",
            });
          });
      }}
      onCancel={onCancel}
      onClose={onCancel}
      okButtonProps={{
        className: "bg-primary hover:bg-primary customOKButton",
      }}
      cancelButtonProps={{ className: "customCancelButton" }}
      okText={type === "edit" ? "Update" : "Add"}
    >
      {contextHolder}
      <div className="modalInputContainer mt-4 py-4 px-5 max-h-[500px] overflow-scroll">
        <Form form={form} layout="vertical">
          <Form.Item
            className="mt-3"
            name="ticketName"
            rules={[{ required: true, message: "Name of ticket is required." }]}
            label="Ticket Name"
          >
            <Input
              type="text"
              className="w-full px-3 py-1 text-gray-800 bg-white outline-none border border-customgray-1 focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </Form.Item>

          <Form.Item
            name="ticketDuration"
            label="Duration"
            rules={[
              { required: true, message: "Duration of ticket is required." },
            ]}
          >
            <Input
              type="text"
              className="w-full px-3 py-1 text-gray-800 bg-white outline-none border border-customgray-1 focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </Form.Item>

          <Form.Item
            name="description"
            label="Description"
            rules={[
              { required: true, message: "Description of ticket is required." },
            ]}
          >
            <TextArea className="w-full px-3 py-2 text-gray-800 bg-white outline-none border border-customgray-1 focus:border-indigo-600 shadow-sm rounded-lg" />
          </Form.Item>

          <Form.Item
            name="assignedTo"
            label="Assigned To"
            rules={[{ required: true, message: "This field is required." }]}
          >
            <Select
              className="w-full text-gray-800 bg-white outline-none focus:border-indigo-600 shadow-sm rounded-lg"
              placeholder="Assigend To"
              options={serviceOptions}
            />
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
};
