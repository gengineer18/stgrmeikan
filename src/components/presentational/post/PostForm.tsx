import React, { useState } from 'react'
import { Card, CardContent } from '@material-ui/core'
import { Upload, Form, Input, Button, TreeSelect, Collapse, DatePicker } from 'antd'
import { treeData, AreaDataEn } from '@/client/form/homeTeamTreeData'
import ImgCrop from 'antd-img-crop'
import { UploadFile } from 'antd/lib/upload/interface'
import { css } from '@emotion/core'

interface FileList {
  uid: string
  name: string
  status: string
  url: string
}

const stButton = css({
  marginTop: `16px`,
})

export const PostForm: React.FCX = () => {
  const [form] = Form.useForm()
  const { TextArea } = Input
  const { Panel } = Collapse

  const onFinish = (values) => {
    console.log(`Success:`, values)
  }

  const onFinishFailed = (errorInfo) => {
    console.log(`Failed:`, errorInfo)
  }

  // const normFile = (e) => {
  //   console.log(`Upload event:`, e)
  //   if (Array.isArray(e)) {
  //     return e
  //   }
  //   return e && e.fileList
  // }

  const [fileList, setFileList] = useState<UploadFile<FileList>[]>([])
  // const [fileUrl, setFileUrl] = useState<string>(``)

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList)
    // setFileUrl(`url`)
  }

  const onPreview = async (file) => {
    let src = file.url
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader()
        reader.readAsDataURL(file.originFileObj)
        reader.onload = () => resolve(reader.result)
      })
    }
    const image = new Image()
    image.src = src
    const imgWindow = window.open(src)
    imgWindow.document.write(image.outerHTML)
  }

  return (
    <>
      <Card>
        <CardContent>
          <Form form={form} name='post' layout='vertical' onFinish={onFinish} onFinishFailed={onFinishFailed}>
            <Form.Item
              name='upload'
              label='スタグルフォト'
              rules={[
                { required: true, message: `スタグルフォトを選択してください！` },
                // ({ getFieldValue }) => ({
                //   validator(_, value) {
                //     if (!AreaDataEn.includes(value)) {
                //       return Promise.resolve()
                //     }
                //     // eslint-disable-next-line prefer-promise-reject-errors
                //     return Promise.reject(`スタグルフォトを選択してください！`)
                //   },
                // }),
              ]}
            >
              <ImgCrop rotate aspect={1 / 1}>
                <Upload
                  action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
                  listType='picture-card'
                  fileList={fileList}
                  onChange={onChange}
                  onPreview={onPreview}
                >
                  {fileList.length < 1 && `+ Upload`}
                </Upload>
              </ImgCrop>
            </Form.Item>
            <Form.Item
              label='ホームチーム'
              name='club'
              rules={[
                { required: true, message: `ホームチームを選択してください！` },
                () => ({
                  validator(_, value) {
                    if (!AreaDataEn.includes(value)) {
                      return Promise.resolve()
                    }
                    // eslint-disable-next-line prefer-promise-reject-errors
                    return Promise.reject(`ホームチームを選択してください！`)
                  },
                }),
              ]}
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
            <Form.Item
              label='キャプション'
              name='caption'
              rules={[{ required: true, message: `キャプションを入力してください！` }]}
            >
              <TextArea rows={5} autoSize={{ minRows: 2, maxRows: 6 }} />
            </Form.Item>
            <Collapse>
              <Panel key='option' header='オプション'>
                <Form.Item label='価格'>
                  <Form.Item
                    name='price'
                    noStyle
                    rules={[
                      () => ({
                        validator(_, value) {
                          if (!value) return Promise.resolve()
                          if (!Number.isNaN(value) && value > 0) {
                            return Promise.resolve()
                          }
                          // eslint-disable-next-line prefer-promise-reject-errors
                          return Promise.reject(`0より大きい数字を入力してください！`)
                        },
                      }),
                    ]}
                  >
                    <Input addonAfter={<span>円</span>} />
                  </Form.Item>
                </Form.Item>
                <Form.Item label='店舗名' name='shop'>
                  <Input />
                </Form.Item>
                <Form.Item label='観戦日' name='date'>
                  <DatePicker />
                </Form.Item>
              </Panel>
            </Collapse>
            <Form.Item style={{ textAlign: `right` }} css={stButton}>
              <Button type='primary' htmlType='submit'>
                投稿する
              </Button>
            </Form.Item>
          </Form>
        </CardContent>
      </Card>
    </>
  )
}
