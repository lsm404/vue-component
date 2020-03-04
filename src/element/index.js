
import {
  Pagination, // 分页
  Dialog, // 对话框
  Autocomplete, // 远程下拉框
  Dropdown, // 下拉菜单
  DropdownMenu, // 下拉菜单
  DropdownItem, // 下拉item
  Menu, // 导航栏菜单
  Submenu, // 子菜单
  MenuItem, // 菜单itemp
  MenuItemGroup, // 菜单组
  Input, // 输入框
  Radio, // 单选框
  RadioButton, // 单选框按钮
  Checkbox, // 复选框
  CheckboxButton, // 复选框按钮
  CheckboxGroup, // 复选框组
  Switch, // 开关
  Select, // 选择器
  Option, // 选择器item
  OptionGroup, // 选择器分组
  Button, // 按钮
  ButtonGroup, // 按钮组
  Table, // 表格
  TableColumn, // 表格列
  DatePicker, // 日期选择器
  TimeSelect, // 时间选择器组
  TimePicker, // 时间选择器
  Popover, // 弹出提示框
  Tooltip, // 文字提示
  Breadcrumb, // 面包屑
  BreadcrumbItem, // 面包屑item
  Form, // 表单
  FormItem, // 表单item
  Tabs, // 标签页
  TabPane, // 标签组
  Tag, // 标签
  Tree, // 树形控件
  Alert, // 警告
  Slider, // 滑块
  Icon, // 图标
  Row, // Layout 布局
  Col, // Layout 布局
  Upload, // 文件上传
  Progress, // 进度条
  Badge, // 标记
  Card, // 卡片
  Rate, // 星星评分
  Steps, // 步骤条
  Step, // 步骤条
  Carousel, // 走马灯
  CarouselItem, // 走马灯item
  Collapse, // 折叠面板
  CollapseItem, // 折叠面板item
  Cascader, // 级联选择器
  ColorPicker, // 颜色选择器
  Transfer, // 穿梭框
  Container, // 布局容器
  Header, // 布局容器 header
  Aside, // 布局容器 aside
  Main, // 布局容器 main
  Footer, // 布局容器 footer
  Loading, // 加载
  MessageBox, // 弹框
  Message, // 消息提示
  Notification, // 通知
  Timeline, // 时间线
  TimelineItem, // 时间线item
  Divider, // 分割线
  Image, // 图片
  InputNumber,
  RadioGroup

} from 'element-ui'

const element = {
  install: function (Vue) {
    // Vue.use(NavMenu)
    Vue.use(Pagination) // 分页
    Vue.use(Dialog) // 对话框
    Vue.use(Autocomplete) // 远程下拉框
    Vue.use(Dropdown) // 下拉菜单
    Vue.use(DropdownMenu) // 下拉菜单
    Vue.use(DropdownItem) // 下拉item
    Vue.use(Menu) // 导航栏菜单
    Vue.use(Submenu) // 子菜单
    Vue.use(MenuItem) // 菜单itemp
    Vue.use(MenuItemGroup) // 菜单组
    Vue.use(Input) // 输入框
    Vue.use(InputNumber) // 计数器
    Vue.use(Radio)// 单选框
    Vue.use(RadioGroup) // 单选框组
    Vue.use(RadioButton) // 单选框按钮
    Vue.use(Checkbox) // 复选框
    Vue.use(CheckboxButton) // 复选框按钮
    Vue.use(CheckboxGroup) // 复选框组
    Vue.use(Switch) // 开关
    Vue.use(Select) // 选择器
    Vue.use(Option) // 选择器item
    Vue.use(OptionGroup) // 选择器分组
    Vue.use(Button) // 按钮
    Vue.use(ButtonGroup) // 按钮组
    Vue.use(Table) // 表格
    Vue.use(TableColumn) // 表格列
    Vue.use(DatePicker) // 日期选择器
    Vue.use(TimeSelect) // 时间选择器组
    Vue.use(TimePicker) // 时间选择器
    Vue.use(Popover) // 弹出提示框
    Vue.use(Tooltip) // 文字提示
    Vue.use(Breadcrumb) // 面包屑
    Vue.use(BreadcrumbItem) // 面包屑item
    Vue.use(Form) // 表单
    Vue.use(FormItem) // 表单item
    Vue.use(Tabs) // 标签页
    Vue.use(TabPane) // 标签组
    Vue.use(Tag) // 标签
    Vue.use(Tree) // 树形控件
    Vue.use(Alert)// 警告
    Vue.use(Slider) // 滑块
    Vue.use(Icon) // 图标
    Vue.use(Row) // Layout 布局
    Vue.use(Col) // Layout 布局
    Vue.use(Upload) // 文件上传
    Vue.use(Progress) // 进度条
    Vue.use(Badge) // 标记
    Vue.use(Card) // 卡片
    Vue.use(Rate) // 星星评分
    Vue.use(Steps) // 步骤条
    Vue.use(Step) // 步骤条
    Vue.use(Carousel) // 走马灯
    Vue.use(CarouselItem) // 走马灯item
    Vue.use(Collapse) // 折叠面板
    Vue.use(CollapseItem) // 折叠面板item
    Vue.use(Cascader) // 级联选择器
    Vue.use(ColorPicker) // 颜色选择器
    Vue.use(Transfer) // 穿梭框
    Vue.use(Container) // 布局容器
    Vue.use(Header) // 布局容器 header
    Vue.use(Aside) // 布局容器 aside
    Vue.use(Main) // 布局容器 main
    Vue.use(Footer) // 布局容器 footer
    Vue.use(Loading.directive) // 加载
    Vue.use(Timeline) // 时间线
    Vue.use(TimelineItem) // 时间线item
    Vue.use(Divider) // 分割线//
    Vue.use(Image) // 图片
    Vue.prototype.$loading = Loading.service
    Vue.prototype.$msgbox = MessageBox // 弹框
    Vue.prototype.$alert = MessageBox.alert
    Vue.prototype.$confirm = MessageBox.confirm
    Vue.prototype.$prompt = MessageBox.prompt
    Vue.prototype.$notify = Notification // 通知
    Vue.prototype.$message = Message // 消息提示
  }
}

export default element
