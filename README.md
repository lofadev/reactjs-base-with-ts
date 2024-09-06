# React + TypeScript + Vite + SWC

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

### Giải thích cấu trúc source:
- Source được build bằng VITE + SWC
[@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

| Thư mục   | Chức năng     |
| :-------- | :-------------|
| apis | Nơi cài đặt các api để gửi request từ FE đến BE |
| assets | Lưu trữ các cài đặt tĩnh như ảnh, font, các định dạng file css tĩnh |
| components |Lưu trữ các common component dùng chung (hiện tại có bộ form item common của [Ant design](https://ant.design/components/form) kết hợp [React Hook Form](https://www.react-hook-form.com/get-started/)) |
| configs | Lưu trữ các config của các thư viện (Hiện tại có Axios / I18n) |
| constants | Lưu trữ các file khai báo các hằng số |
| hooks | Lưu trữ các hooks có khả năng tái sử dụng / dùng chung |
| interfaces | Lưu trữ các global interface phục vụ tái sử dụng, hoặc tránh khai báo interface vào file code, làm khó đọc |
| layouts | Mỗi dự án sẽ có một hoặc nhiều layouts, đây là nơi lưu trữ các layout khác nhau cho dự án |
| pages | Lưu trữ các folder theo tên màn hình |
| routers | Lưu trữ config routers |
| slices | Lưu trữ các slice của Redux (base sử dụng Redux toolkit và Redux Saga) |
| store | Lưu trữ các cài đặt của redux - source sử dụng [Redux toolkit](https://redux-toolkit.js.org/introduction/getting-started) |
| styles | Lưu trữ các file style (GlobalStyled, theme ...) |
| utils | Lưu trữ các function có thể tái sử dụng, hoặc các function có tính chất như hỗ trợ cho service hoạt động |
| App.tsx | Thư mục tổng, nơi gọi và sử dụng các context provider của các thư viện hoặc có thể tạo thêm thư mục providers vào source và config để sử dụng |
| main.tsx | File khởi tạo jsx để inject vào DOM html - có thể bọc <React.StrictMode> hoặc không, vì tsconfig cũng đã set true chế độ strict |
| .env | Khai báo enviroment cho dự án |
| .eslintrc.js / .prettierrc / .editorconfig | config linter code / format code ts, tsx / format editor để đồng bộ 3 chức năng này theo hệ điều hành |

- Source viết bằng Typescript - Ưu tiên sử dụng typescript (có cho phép allowJS ở tsconfig)
- Đa số các configs code style / code convention đều là mặc định của thư viện

### Quy tắc đặt tên
- Tên biến/Tên file có ý nghĩa
- Tên folder viết thường, tên file function/hook/constant viết thường. Tên component/provider viết hoa. Không viết code xử lý trong file index.ts / index.tsx