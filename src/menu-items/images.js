// assets
import {IconColorPicker} from '@tabler/icons';

// constant
const icons = {
  IconColorPicker
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const images = {
  id: 'images',
  title: '图片工具集',
  // caption: 'Pages Caption',
  type: 'group',
  children: [
    {
      id: 'basic_change',
      title: '一键改图',
      type: 'collapse',
      icon: icons.IconColorPicker,
      children: [
        {
          id: 'compress_quality',
          title: '压缩图片质量',
          type: 'item',
          url: '/pages/login/login3',
        },
        {
          id: 'compress_size',
          title: '压缩图片尺寸',
          type: 'item',
          url: '/pages/register/register3',
        },
        {
          id: 'image_resize',
          title: '图片缩略图',
          type: 'item',
          url: '/pages/register/register3',
          target: true
        },
        {
          id: 'image_crop',
          title: '裁剪图片',
          type: 'item',
          url: '/pages/register/register3',
          target: true
        },
        {
          id: 'image_resize',
          title: '图片内切圆',
          type: 'item',
          url: '/pages/register/register3',
          target: true
        },
        {
          id: 'image_resize',
          title: '圆角图片',
          type: 'item',
          url: '/pages/register/register3',
          target: true
        },
        {
          id: 'image_resize',
          title: '图片格式转换',
          type: 'item',
          url: '/pages/register/register3',
          target: true
        },
        {
          id: 'image_resize',
          title: '图片水印',
          type: 'item',
          url: '/pages/register/register3',
          target: true
        },
        {
          id: 'image_resize',
          title: '图片马赛克',
          type: 'item',
          url: '/pages/register/register3',
          target: true
        },
        {
          id: 'image_resize',
          title: '旋转图片',
          type: 'item',
          url: '/pages/register/register3',
          target: true
        },
        {
          id: 'image_resize',
          title: '锐化图片',
          type: 'item',
          url: '/pages/register/register3',
          target: true
        },
        {
          id: 'image_resize',
          title: '模糊图片',
          type: 'item',
          url: '/pages/register/register3',
          target: true
        },
        {
          id: 'image_resize',
          title: '图片亮度',
          type: 'item',
          url: '/pages/register/register3',
          target: true
        },
        {
          id: 'image_resize',
          title: '图片对比度',
          type: 'item',
          url: '/pages/register/register3',
          target: true
        }
      ]
    }
  ]
};

export default images;
