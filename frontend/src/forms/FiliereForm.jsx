import React from "react";
import { Button, Form, Input } from "antd";

export default function FiliereForm({ isUpdateForm = false }) {
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
            message: "Veuillez saisir une description !",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="duree"
        label="Durée"
        rules={[
          {
            required: true,
            message: "Veuillez saisir une duree",
          },
        ]}
      >
        <Input />
      </Form.Item>
    </>
  );
}
