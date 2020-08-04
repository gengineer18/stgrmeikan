import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'
import { Upload, Form, Input, Button, TreeSelect } from 'antd'
import { InboxOutlined } from '@ant-design/icons'
import { treeData } from '@/client/form/homeTeamTreeData'

export const PostForm: React.FCX = () => {
  const [form] = Form.useForm()
  const { TextArea } = Input

  const onFinish = (values) => {
    console.log(`Success:`, values)
  }

  const onFinishFailed = (errorInfo) => {
    console.log(`Failed:`, errorInfo)
  }

  const normFile = (e) => {
    console.log(`Upload event:`, e)
    if (Array.isArray(e)) {
      return e
    }
    return e && e.fileList
  }

  return (
    <>
      <Card>
        <Form form={form} name='post' onFinish={onFinish} onFinishFailed={onFinishFailed}>
          <CardHeader
            avatar={<Avatar aria-label='recipe'>R</Avatar>}
            title={
              <>
                <Form.Item
                  label='ホームチーム'
                  name='club'
                  rules={[{ required: true, message: `ホームチームを選んでください！` }]}
                >
                  <TreeSelect treeData={treeData} />
                </Form.Item>
                <Form.Item
                  label='タイトル'
                  name='title'
                  rules={[{ required: true, message: `タイトルを入力してください！` }]}
                >
                  <Input />
                </Form.Item>
              </>
            }
            subheader='2020/08/03'
          />
          <CardContent>
            <Form.Item
              name='upload'
              label='スタグルフォト'
              valuePropName='fileList'
              getValueFromEvent={normFile}
              rules={[{ required: true, message: `コメントを入力してください！` }]}
            >
              <Upload name='logo' action='https://www.mocky.io/v2/5cc8019d300000980a055e76' listType='picture'>
                <Button>
                  <InboxOutlined />
                  {` `}
                  Click to upload
                </Button>
              </Upload>
            </Form.Item>
            <Form.Item
              label='コメント'
              name='comment'
              rules={[{ required: true, message: `コメントを入力してください！` }]}
            >
              <TextArea rows={4} />
            </Form.Item>
            <Form.Item style={{ textAlign: `right` }}>
              <Button type='primary' htmlType='submit'>
                Post
              </Button>
            </Form.Item>
          </CardContent>
        </Form>
      </Card>
    </>
  )
}
