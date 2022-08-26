import React, { useContext } from "react";
import { Button, Checkbox, Form, Input, Radio, Select } from "antd";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "antd/dist/antd.min.css";
import "./contactForm.scss";
import {
  formItemLayout,
  isDirty,
  tailFormItemLayout,
} from "../../../utils/formUtils";
import { ContactContext } from "../../../context/ContactProvider";
const { Option } = Select;

const ContactForm = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const params = useParams();
  const notify = (text, type) =>
    toast(text, {
      position: "top-right",
      type: type || "success",
      autoClose: 5000,
    });
  const { contactData, setContactData } = useContext(ContactContext);
  const editData = contactData.find((item) => item.key === params.id);

  const onFinish = (values) => {
    values.key = editData.key;
    const dirtyData = isDirty(editData, values);
    if (!dirtyData) {
      notify("Contact could not be changed", "error");
    } else {
      let filterCopyContactData = [];
      [...contactData].forEach((item) => {
        if (item.key === values.key) {
          item = dirtyData;
        }
        filterCopyContactData.push(item);
      });
      localStorage.setItem("contacts", JSON.stringify(filterCopyContactData));
      setContactData(filterCopyContactData);
      navigate("/contacts");
      notify("Contact changed and saved");
    }
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="994">+994</Option>
        <Option value="90">+90</Option>
      </Select>
    </Form.Item>
  );
  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={editData}
      className="createForm"
      scrollToFirstError
    >
      <Form.Item
        name="firstname"
        label="Firstname"
        rules={[
          {
            required: true,
            message: "firstname cannot be empty",
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="lastname"
        label="Lastname"
        rules={[
          {
            required: true,
            message: "lastname cannot be empty",
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="fathername"
        label="Fathername"
        rules={[
          {
            required: true,
            message: "fathername cannot be empty",
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="phone"
        label="Phone"
        rules={[
          {
            required: true,
            message: "Please input your phone number!",
          },
        ]}
      >
        <Input
          addonBefore={prefixSelector}
          style={{
            width: "100%",
          }}
        />
      </Form.Item>

      <Form.Item
        name="gender"
        label="Gender"
        rules={[{ required: true, message: "Please select gender!" }]}
      >
        <Radio.Group>
          <Radio value="male">Male</Radio>
          <Radio value="female">Female</Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item name="intro" label="Intro">
        <Input.TextArea showCount maxLength={100} />
      </Form.Item>

      <Form.Item
        name="position"
        label="Position"
        rules={[
          {
            required: true,
            message: "Please select position",
          },
        ]}
      >
        <Select placeholder="select your gender">
          <Option value="developer">Developer</Option>
          <Option value="teacher">Teacher</Option>
          <Option value="doctor">Doctor</Option>
          <Option value="manager">Manager</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        className="sendMe"
        {...tailFormItemLayout}
      >
        <Checkbox>Send me new updates</Checkbox>
      </Form.Item>
      <Form.Item className="form-btn" {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Save
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ContactForm;
