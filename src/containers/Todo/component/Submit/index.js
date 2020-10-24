import React from 'react';
import { Form, Input, Button } from 'antd';
import { connect } from 'react-redux';
import * as action from '../../action';
import './index.less';

function Submit(props) {
  const { addItem } = props;
  const [form] = Form.useForm();
  const onFinish = values => {
    addItem(values);
    form.resetFields();
  };

  return (
    <Form layout="inline" form={form} onFinish={onFinish}>
      <Form.Item
        label="事项"
        name="name"
        rules={[
          { required: true, message: 'required!' },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">增加一项</Button>
      </Form.Item>
    </Form>
  )
}

const mapDispatch = {
  addItem: action.addItem,
}

export default connect(null, mapDispatch)(Submit);
