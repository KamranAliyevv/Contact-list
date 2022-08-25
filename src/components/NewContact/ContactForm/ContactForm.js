import React, { useContext } from "react";
import { Button, Checkbox, Form, Input, Radio, Select } from "antd";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "antd/dist/antd.min.css";
import "./contactForm.scss";
import { formItemLayout, tailFormItemLayout } from "../../../utils/formUtils";
import { ContactContext } from "../../../context/ContactProvider";
import { v4 as uuidv4 } from "uuid";
const { Option } = Select;

const ContactForm = () => {
  const { contactData, setContactData } = useContext(ContactContext);
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const notify = (text) =>
    toast(text, {
      position: "top-right",
      type: "success",
      autoClose: 5000,
    });

  const onFinish = (values) => {
    const replacer = (key, value) =>
      typeof value === "undefined" ? null : value;
    values.key = uuidv4();
    console.log(values);
    const copyContactData = [...contactData];
    copyContactData.push(values);
    console.log(copyContactData);
    localStorage.setItem("contacts", JSON.stringify(copyContactData, replacer));
    setContactData(copyContactData);
    notify("New Contact added");
    navigate("/contacts");
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
      initialValues={{
        residence: ["zhejiang", "hangzhou", "xihu"],
        prefix: "90",
      }}
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
        initialValue={"developer"}
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
          Create
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ContactForm;
