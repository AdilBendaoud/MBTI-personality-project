import React from "react";
import { Button, Form, Input } from "antd";

export default function TestForm({ isUpdateForm = false }) {
  return (
    <>
      <Form.Item
        label="Nom"
        name="nom"
        rules={[
          {
            required: true,
            message: "Veuillez saisir le nom !",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Description"
        name="description"
        rules={[
          {
            required: false,
            message: "Veuillez saisir description !",
          },
        ]}
      >
        <Input />
      </Form.Item>
    </>
  );
}
