-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th6 28, 2022 lúc 11:50 AM
-- Phiên bản máy phục vụ: 10.4.24-MariaDB
-- Phiên bản PHP: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `database-news`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `categories`
--

INSERT INTO `categories` (`id`, `name`, `slug`, `created_at`, `updated_at`) VALUES
(1, 'Thế giới', 'the-gioi', '2022-06-21 06:12:20', '2022-06-21 06:12:20'),
(2, 'Kinh tế', 'kinh-te', '2022-06-21 06:12:20', '2022-06-21 06:12:20'),
(3, 'Xã hội', 'xa-hoi', '2022-06-21 06:12:20', '2022-06-21 06:12:20'),
(4, 'Thể thao', 'the-thao', '2022-06-21 06:12:20', '2022-06-21 06:12:20'),
(6, 'Giáo dục', 'giao-duc', '2022-06-21 06:12:20', '2022-06-21 06:12:20');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2022_06_14_141034_create_categories_table', 1),
(6, '2022_06_14_141343_create_posts_table', 1),
(7, '2022_06_15_140116_create_post_tags_table', 1),
(8, '2022_06_21_112451_create_tags_table', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\User', 2, 'Personal Access Token', '6447c7c92f194014955318760ef12098906ee7041442c3633293ea61ef950440', '[\"*\"]', NULL, '2022-06-23 03:58:56', '2022-06-23 03:58:56'),
(2, 'App\\Models\\User', 2, 'Personal Access Token', '6fa86846e500f12e7881b619190e204777c87be50fc9dc979d87df57284a000b', '[\"*\"]', NULL, '2022-06-23 07:41:48', '2022-06-23 07:41:48'),
(3, 'App\\Models\\User', 2, 'Personal Access Token', 'd3fdce28a8ebe3df0de1c604aeb432a4cca039aff4cad50755552bca661a5823', '[\"*\"]', NULL, '2022-06-23 13:40:48', '2022-06-23 13:40:48'),
(4, 'App\\Models\\User', 2, 'Personal Access Token', '7b704ebc5a909a6fae9212b06ca765216ce13ac675811d7b696a01052830518d', '[\"*\"]', NULL, '2022-06-23 13:41:00', '2022-06-23 13:41:00'),
(5, 'App\\Models\\User', 2, 'Personal Access Token', '179d442f645fc53e15b39ecf92e3c0367e0500e0a4c365220622990230f8fd0f', '[\"*\"]', NULL, '2022-06-23 13:41:27', '2022-06-23 13:41:27'),
(6, 'App\\Models\\User', 2, 'Personal Access Token', 'abf5d20d6c25642362693fa2d2b93f2d25aa864e543e6c1f5c75bb0859b16fdd', '[\"*\"]', NULL, '2022-06-23 13:45:03', '2022-06-23 13:45:03'),
(7, 'App\\Models\\User', 2, 'Personal Access Token', 'b2a833b116ecd78f871b71a0bd1573677bc6a9623a0ad9cae7741530f34e1366', '[\"*\"]', NULL, '2022-06-23 14:12:31', '2022-06-23 14:12:31'),
(8, 'App\\Models\\User', 2, 'Personal Access Token', 'e44a728512e4c9ca1923de04ba7179c5b6afc7caa84717ef8e30bcb54bc600b7', '[\"*\"]', NULL, '2022-06-23 14:12:39', '2022-06-23 14:12:39'),
(9, 'App\\Models\\User', 2, 'Personal Access Token', '75e007d9512db57f53e940a1cec7573584ac0532d290ad6f55c50972844e17af', '[\"*\"]', NULL, '2022-06-23 14:15:20', '2022-06-23 14:15:20'),
(10, 'App\\Models\\User', 2, 'Personal Access Token', 'cd08a9d8b7c6be58f62fdfe7c3c011514ba46522a6a28cdf26cb0579fc4a2a5c', '[\"*\"]', NULL, '2022-06-23 14:20:10', '2022-06-23 14:20:10');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `posts`
--

CREATE TABLE `posts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `category_id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `excerpt` varchar(666) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `content` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` enum('publish','pending','draft','trash') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'draft',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `posts`
--

INSERT INTO `posts` (`id`, `user_id`, `category_id`, `title`, `slug`, `excerpt`, `content`, `image`, `status`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 'Tổng thống Pháp bác đơn từ chức của Thủ tướng', 'tong-thong-phap-bac-don-tu-chuc-cua-thu-tuong', 'Văn phòng tổng thống Pháp ngày 21/6 thông báo Thủ tướng Elisabeth Borne đã đệ đơn từ chức lên Tổng thống Emmanuel Macron sau khi liên minh cầm quyền mất thế đa số trong các cuộc bầu cử Quốc hội vừa qua, song đơn từ chức đã bị bác bỏ.', 'a', 'test.png', 'publish', '2022-06-21 06:12:20', '2022-06-21 06:12:20'),
(2, 1, 1, 'Tây Ban Nha chứng kiến cháy rừng tồi tệ nhất trong lịch sử', 'tay-ban-nha-chung-kien-chay-rung-toi-te-nhat-trong-lich-su', 'Nhà chức trách Tây Ban Nha ngày 20/6 cho biết một đám cháy rừng do sét đánh ngày 15/6 tại tỉnh Zamora ở Tây Bắc Madrid đã trở thành đám cháy rừng tồi tệ nhất trong lịch sử nước này.', 'a', 'test.png', 'publish', '2022-06-21 06:12:20', '2022-06-21 06:12:20'),
(3, 1, 1, 'Ngồi hơn 8 tiếng/ngày tăng 20% nguy cơ mắc bệnh tim mạch', 'ngoi-hon-8-tieng-ngay-tang-20-nguy-co-mac-benh-tim-mach', 'Một nghiên cứu của các nhà khoa học Trung Quốc chỉ ra rằng những người ngồi hơn 8 giờ một ngày có nguy cơ mắc các bệnh về tim mạch và đột quỵ cao hơn 20%, dấy lên mối lo ngại về sức khỏe của những người làm việc công sở.', 'a', 'test.png', 'publish', '2022-06-21 06:12:20', '2022-06-21 06:12:20'),
(4, 1, 1, 'ĐHĐ LHQ ấn định Ngày quốc tế phụ nữ trong ngành ngoại giao', 'djhdj-lhq-an-djinh-ngay-quoc-te-phu-nu-trong-nganh-ngoai-giao', 'Ngày 20/6, Đại hội đồng Liên hợp quốc (ĐHĐ LHQ) thông qua một nghị quyết quy định ngày 24/6 hằng nằm là Ngày quốc tế phụ nữ trong ngành ngoại giao.', 'a', 'test.png', 'publish', '2022-06-21 06:12:20', '2022-06-21 06:12:20'),
(5, 1, 2, 'Giá vàng châu Á giảm chiều 21/6 do triển vọng lãi suất tăng', 'gia-vang-chau-a-giam-chieu-216-do-trien-vong-lai-suat-tang', 'Giá vàng châu Á giảm trong phiên giao dịch chiều 21/6 do triển vọng tăng lãi suất ngày càng gia tăng, mặc dù đồng USD giảm nhẹ đã hạn chế đà giảm giá của vàng.', 'a', 'test.png', 'publish', '2022-06-21 06:12:20', '2022-06-21 06:12:20'),
(6, 1, 2, 'Việt Nam tham dự Hội chợ Dệt may Quốc tế Ấn Độ 2022', 'viet-nam-tham-du-hoi-cho-det-may-quoc-te-an-djo-2022', 'Theo phóng viên TTXVN tại New Delhi, Hội chợ Dệt may Quốc tế Ấn Độ lần thứ 67 (IIGF) đã khai mạc ngày 20/6 tại Trung tâm triển lãm India Expo Centre, Greater Noida, bang Uttar Pradesh, Ấn Độ.', 'a', 'test.png', 'publish', '2022-06-21 06:12:20', '2022-06-21 06:12:20'),
(9, 1, 1, 'Nhân chứng kể khoảnh khắc xảy ra động đất Afghanistan', 'nhan-chung-ke-khoanh-khac-xay-ra-djong-djat-afghanistan', 'Nhân chứng kể lại khoảnh khắc người dân la hét sợ hãi khi trận động đất xảy ra ở tỉnh Paktika, khiến ít nhất 1.000 người thiệt mạng.', 'a', 'test.png', 'draft', '2022-06-22 20:18:46', '2022-06-22 20:18:46'),
(10, 1, 1, 'Ông Tập: Khủng hoảng Ukraine cảnh tỉnh về mở rộng liên minh quân sự', '', 'Chủ tịch Trung Quốc Tập Cận Bình chỉ trích các lệnh trừng phạt nhắm vào Nga và cảnh báo về tác động của việc mở rộng liên minh quân sự. ', 'a', 'test.png', 'publish', '2022-06-22 20:23:13', '2022-06-22 20:23:13'),
(11, 1, 1, 'Nga tố Ukraine tấn công nhà máy lọc dầu', 'nga-to-ukraine-tan-cong-nha-may-loc-dau', 'Nhà máy lọc dầu ở miền nam nước Nga cho biết họ bị máy bay không người lái từ Ukraine tấn công, gây ra hỏa hoạn và buộc cơ sở phải dừng hoạt động. ', 'a', 'test.png', 'draft', '2022-06-22 20:24:56', '2022-06-22 20:24:56'),
(12, 1, 1, 'Vùng lãnh thổ có thể đốt nóng căng thẳng Nga - NATO', 'vung-lanh-tho-co-the-djot-nong-cang-thang-nga-nato', 'Căng thẳng ngày càng tăng xung quanh vùng lãnh thổ hải ngoại Kaliningrad của Nga, làm dấy lên lo ngại nguy cơ đối đầu trực tiếp giữa Moskva và NATO. ', 'a', 'test.png', 'publish', '2022-06-22 20:25:57', '2022-06-22 20:25:57'),
(13, 1, 1, 'Anh nói phe ly khai thân Nga ở Ukraine \'mất 55% binh lực\'', 'anh-noi-phe-ly-khai-than-nga-o-ukraine-mat-55-binh-luc', 'Bộ Quốc phòng Anh nhận định lực lượng ly khai thân Nga tại tỉnh Donetsk, miền đông Ukraine, hứng thương vong tương đương 55% binh lực ban đầu. ', 'a', 'test.png', 'publish', '2022-06-22 20:25:57', '2022-06-15 20:25:57'),
(14, 1, 1, 'Đầu tư sinh lời ngay với biệt thự Wyndham Phú Quốc', 'djau-tu-sinh-loi-ngay-voi-biet-thu-wyndham-phu-quoc', 'Cam kết lợi nhuận đến 48%/6 năm, tặng gói nội thất đến 800 triệu, vận hành tháng 9. ', 'a', 'test.png', 'publish', '2022-06-22 20:27:42', '2022-06-22 20:27:42'),
(16, 1, 2, 'Chứng khoán ngày 28/6: Sóng lớn ở nhóm cổ phiếu ngân hàng', 'chung-khoan-ngay-286-song-lon-o-nhom-co-phieu-ngan-hang', 'Trong phiên giao dịch ngày 28/6, nhóm cổ phiếu ngân hàng càng giao dịch càng tích cực với biên độ tăng lớn. Đây cũng là động lực chính giúp VN-Index vượt xa mốc 1.200 điểm.', 'a', 'test.png', 'publish', '2022-06-28 09:20:11', '2022-06-28 09:20:11'),
(17, 1, 2, 'Nhiều mô hình giảm nghèo bền vững ở Bình Phước', 'nhieu-mo-hinh-giam-ngheo-ben-vung-o-binh-phuoc', 'Trước đây, gia đình ông Lê Văn Hiểu (xã Lộc Thạnh, huyện Lộc Ninh, tỉnh Bình Phước) có hơn 1ha đất chủ yếu trồng hoa màu, năng suất thấp nên cái nghèo cứ đeo bám mãi.', 'a', 'test.png', 'draft', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(18, 1, 2, 'Thêm nguồn vốn cho các dự án xanh', 'them-nguon-von-cho-cac-du-an-xanh', 'Tập đoàn Tài chính Phát triển Quốc tế Hoa Kỳ (DFC) vừa công bố thông qua khoản tài chính lên tới 1,4 tỷ USD cho 34 dự án ở các nước đang phát triển trên toàn thế giới.', 'a', 'a.png', 'publish', '2022-06-28 09:25:39', '2022-06-28 09:25:39'),
(19, 1, 2, 'Sử dụng điện hiệu quả, tiết kiệm trong mùa nắng nóng', 'su-dung-djien-hieu-qua-tiet-kiem-trong-mua-nang-nong', 'Miền Bắc đang bước vào cao điểm nắng nóng, phụ tải điện tăng trưởng mạnh. Xoay quanh các giải pháp bảo đảm cấp điện an toàn, tin cậy, ông Lê Văn Trang, Phó tổng giám đốc Tổng công ty Điện lực miền Bắc (EVNNPC) cho biết, xác định công tác bảo đảm điện mùa nắng nóng năm 2022 đối mặt với nhiều thách thức, ngay từ quý I-2022, tổng công ty đã thành lập ban chỉ đạo điều hành cung ứng điện, phân công rõ nhiệm vụ, trách nhiệm của từng thành viên.', 'a', 'a.png', 'publish', '2022-06-28 09:25:39', '2022-06-28 09:25:39'),
(20, 1, 2, 'Giá xăng dầu hôm nay (28-6): Tăng nhẹ', 'gia-xang-dau-hom-nay-28-6-tang-nhe', 'Lo ngại thiếu hụt nguồn cung tiếp tục đẩy giá dầu leo dốc. Giá dầu WTI nhích nhẹ lên gần 110, dầu Brent “neo” ở 115,1 USD/thùng.', 'a', 'a.png', 'publish', '2022-06-28 09:26:56', '2022-06-28 09:26:56'),
(21, 1, 2, 'Tỷ giá hôm nay (28-6): Đồng USD tiếp tục trượt dốc, thị trường định giá lại triển vọng tăng lãi suất', 'ty-gia-hom-nay-28-6-djong-usd-tiep-tuc-truot-doc-thi-truong-djinh-gia-lai-trien-vong-tang-lai-suat', 'Đầu phiên giao dịch ngày 28-6 (theo giờ Việt Nam), trên thị trường Mỹ, chỉ số US Dollar Index (DXY) đo lường biến động đồng bạc xanh với 6 đồng tiền chủ chốt (EUR, JPY, GBP, CAD, SEK, CHF) giảm 0,34%, xuống mốc 104,22.', 'a', 'a.png', 'publish', '2022-06-22 20:25:57', '2022-06-15 20:25:57'),
(22, 1, 2, 'Giá vàng hôm nay (28-6): Thế giới giảm, trong nước trái chiều', 'gia-vang-hom-nay-28-6-the-gioi-giam-trong-nuoc-trai-chieu', 'Giá vàng thế giới rạng sáng hôm nay (28-6) giảm do dữ liệu về doanh số bán nhà tốt hơn dự kiến. Trong nước, giá vàng biến động nhẹ và giao dịch gần 69 triệu đồng/ lượng bán ra.', 'a', 'a.png', 'publish', '2022-06-22 20:27:42', '2022-06-22 20:27:42'),
(23, 1, 2, 'Tạo đột phá từ nghị quyết giảm nghèo', 'tao-djot-pha-tu-nghi-quyet-giam-ngheo', 'Là huyện biên giới, có đông đồng bào dân tộc thiểu số (DTTS) và tỷ lệ hộ nghèo trong vùng DTTS tại chỗ cao, vì vậy, ngày 4-11-2016, Huyện ủy Tuy Đức (Đắc Nông) ban hành Nghị quyết số 04-NQ/HU (Nghị quyết 04) về công tác giảm nghèo các bon đồng bào DTTS tại chỗ trên địa bàn huyện giai đoạn 2017-2020 và những năm tiếp theo.', 'a', 'a.png', 'publish', '2022-06-28 09:28:42', '2022-06-28 09:28:42'),
(24, 1, 2, 'Từ 1-8, triển khai thu phí điện tử đồng bộ trên toàn quốc', 'tu-1-8-trien-khai-thu-phi-djien-tu-djong-bo-tren-toan-quoc', 'Phó thủ tướng Lê Văn Thành giao Bộ Giao thông vận tải và các địa phương tập trung chỉ đạo các nhà đầu tư để triển khai thu phí điện tử đồng bộ trên toàn quốc kể từ ngày 1-8-2022; trong đó triển khai thu phí hoàn toàn tự động đối với tất cả các tuyến đường cao tốc.', 'a', 'a.png', 'publish', '2021-07-29 23:49:17', '2021-06-03 21:59:18'),
(25, 1, 2, 'Vàng tăng giá nhẹ', 'vang-tang-gia-nhe', 'Giá vàng hôm nay trong nước ghi nhận mức tăng nhẹ. Tuy nhiên, do biến động về giá không lớn, vàng chưa thể bật tăng mà giao dịch ổn định.', 'a', 'a.png', 'publish', '2022-06-22 20:25:57', '2022-06-15 20:25:57'),
(26, 1, 2, 'Lấy kinh tế biển là trọng tâm trong phát triển tỉnh Quảng Ngãi', 'lay-kinh-te-bien-la-trong-tam-trong-phat-trien-tinh-quang-ngai', 'Ngày 27-6, tại Quảng Ngãi, Tỉnh ủy Quảng Ngãi đã tổ chức Hội nghị tổng kết Nghị quyết số 39-NQ/TW của Bộ Chính trị. Đồng chí Trần Tuấn Anh, Ủy viên Bộ Chính trị, Trưởng Ban Kinh tế Trung ương, Trưởng Ban Chỉ đạo Tổng kết Nghị quyết số 39 chủ trì hội nghị.', 'a', 'a.png', 'publish', '2022-06-22 20:27:42', '2022-06-22 20:27:42'),
(32, 1, 3, 'Áp thấp nhiệt đới giật cấp 8 hiện đang cách Hoàng Sa khoảng 650km', 'ap-thap-nhiet-djoi-giat-cap-8-hien-djang-cach-hoàng-sa-khoảng-650km', 'Vùng áp thấp hoạt động trên Biển Đông khả năng mạnh thành áp thấp nhiệt đới trong những giờ tới, hiện đang cách quần đảo Hoàng Sa khoảng 650km.', 'a', 'a.png', 'publish', '2022-06-28 09:32:16', '2022-06-28 09:32:16'),
(33, 1, 3, 'Thành đoàn Hà Nội có thêm 2 tân phó bí thư', 'thanh-djoan-ha-noi-co-them-2-tan-pho-bi-thu', 'Ngày 28-6, Ban Thường vụ Thành đoàn Hà Nội tổ chức Hội nghị Ban Chấp hành để kiện toàn chức danh Phó bí thư Thành đoàn khóa XV, nhiệm kỳ 2017-2022.', 'a', 'a.png', 'publish', '2022-06-28 09:32:16', '2022-06-28 09:32:16'),
(34, 1, 3, 'Bí thư Thành ủy Hà Nội: Tháo gỡ các “điểm nghẽn” để tăng cường giải ngân vốn đầu tư công', 'bi-thu-thanh-uy-ha-noi-thao-go-cac-djiem-nghen-dje-tang-cuong-giai-ngan-von-djau-tu-cong', 'Sáng 28-6, Ban Chấp hành Đảng bộ thành phố Hà Nội khóa XVII tổ chức Hội nghị lần thứ 8 để họp bàn, cho ý kiến về tình hình thực hiện kế hoạch phát triển kinh tế - xã hội 6 tháng đầu năm, nhiệm vụ, giải pháp 6 tháng cuối năm 2022 và nhiều nội dung quan trọng khác.', 'a', 'a.png', 'publish', '2022-06-22 20:27:42', '2022-06-22 20:27:42'),
(35, 1, 3, 'Hành khách được mang xe đạp gấp lên tàu điện Cát Linh - Hà Đông', 'hanh-khach-djuoc-mang-xe-djap-gap-len-tau-djien-cat-linh-ha-djong', 'Thông tin về kết quả vận hành và doanh thu thời gian qua, sáng 28-6, Tổng giám đốc Công ty TNHH MTV Đường sắt Hà Nội (Hanoi Metro) Vũ Hồng Trường cho biết, để tạo điều kiện tối đa cho người dân và trong điều kiện dư địa về năng lực vận chuyển của tàu còn rất lớn, tuyến đường sắt Cát Linh - Hà Đông sẽ cho người dân mang xe đạp gấp lên tàu.', 'a', 'a.png', 'publish', '2022-06-28 09:28:42', '2022-06-28 09:28:42'),
(36, 1, 3, 'Thời tiết hôm nay (28-6): Bắc Bộ nắng nóng gay gắt, có nơi trên 38 độ C', 'thoi-tiet-hom-nay-28-6-bác-bọ-náng-nóng-gay-gat-co-noi-tren-38-djo-c', 'Theo dự báo của Trung tâm Khí tượng Thủy văn quốc gia, hôm nay, ngày 28-6, Bắc Bộ có nắng nóng và nắng nóng gay gắt với nhiệt độ cao nhất phổ biến 35-38 độ C, có nơi trên 38 độ C.', 'a', 'a.png', 'publish', '2022-06-28 09:35:06', '2022-06-28 09:35:06'),
(37, 6, 3, 'Giám sát việc trả tiền lương làm theo giờ đúng quy định', 'giam-sat-viec-tra-tien-luong-lam-theo-gio-djung-quy-djinh', 'Tăng cường công tác giám sát, tham gia thanh tra, kiểm tra việc thực hiện các quy định của pháp luật về thời giờ làm việc, thời giờ nghỉ ngơi, trong đó, quan tâm giám sát việc trả tiền lương làm theo giờ đúng quy định. Đây là một trong những nội dung trong văn bản Hướng dẫn thực hiện Nghị quyết số 17/2022/UBTVQH15 của Tổng Liên đoàn Lao động Việt Nam.', 'a', 'a.png', 'publish', '2022-06-28 09:36:33', '2022-06-28 09:36:33'),
(38, 1, 3, 'Thường trực Thành ủy Hà Nội chỉ đạo triển khai Dự án đường Vành đai 4 - Vùng Thủ đô', 'thuong-truc-thanh-uy-ha-noi-chi-djao-trien-khai-du-an-djuong-vanh-djai-4-vung-thu-djo', 'Chiều 27-6, đồng chí Đinh Tiến Dũng, Ủy viên Bộ Chính trị, Bí thư Thành ủy, Trưởng đoàn đại biểu Quốc hội thành phố chủ trì hội nghị Thường trực Thành ủy Hà Nội cho ý kiến về Báo cáo triển khai Dự án đầu tư xây dựng đường Vành đai 4 - Vùng Thủ đô Hà Nội.', 'a', 'a.png', 'publish', '2022-06-22 20:25:57', '2022-06-15 20:25:57'),
(39, 1, 3, 'Các tỉnh, thành phố ven biển chủ động ứng phó với vùng áp thấp có khả năng mạnh lên thành bão', 'cac-tinh-thanh-pho-ven-bien-chu-djong-ung-pho-voi-vung-ap-thap-co-kha-nang-manh-len-thanh-bao', 'Ngày 27-6, Văn phòng thường trực Ban Chỉ đạo Quốc gia về phòng, chống thiên tai ban hành Văn bản số 334/VPTT gửi các tỉnh, thành phố ven biển từ Quảng Ninh đến Cà Mau về việc chủ động ứng phó với vùng áp thấp có khả năng mạnh lên thành bão và gió mạnh trên biển.', 'a', 'a.png', 'publish', '2022-06-22 20:27:42', '2022-06-22 20:27:42'),
(40, 1, 3, 'Hà Nội sẽ nhanh chóng triển khai Dự án trọng điểm đường Vành đai 4 - Vùng Thủ đô', 'ha-noi-se-nhanh-chong-trien-khai-du-an-trong-djiem-djuong-vanh-djai-4-vung-thu-djo', 'Ngày 27-6, đồng chí Đinh Tiến Dũng, Ủy viên Bộ Chính trị, Bí thư Thành ủy, Trưởng đoàn đại biểu Quốc hội thành phố Hà Nội cùng các đại biểu Quốc hội thuộc Đoàn đại biểu Quốc hội thành phố Hà Nội đã tiếp xúc cử tri huyện Đông Anh và 2 quận Hoàn Kiếm, Long Biên, báo cáo kết quả kỳ họp thứ ba, Quốc hội khóa XV.', 'a', 'a.png', 'publish', '2022-06-28 09:28:42', '2022-06-28 09:28:42'),
(41, 1, 3, 'Hội thảo Ứng phó với biến đổi khí hậu toàn diện tại Việt Nam', 'hoi-thao-ung-pho-voi-bien-djoi-khi-hau-toan-dien-tai-viet-nam', 'Sáng 27-6, tại Hà Nội, Nhóm công tác của các tổ chức phi chính phủ về Biến đổi Khí hậu ở Việt Nam (CCWG) phối hợp với Tổ chức Quốc tế về Bảo tồn Thiên nhiên tại Việt Nam (WWF-Việt Nam) và Viện Friedrich-Ebert-Stiftung (FES) tổ chức Hội thảo Ứng phó với biến đổi khí hậu toàn diện tại Việt Nam.', 'a', 'a.png', 'publish', '2022-06-28 09:35:06', '2022-06-28 09:35:06'),
(42, 1, 4, 'Kết quả AFC Cup 2022: Viettel FC tiếp tục đứng đầu bảng I', 'ket-qua-afc-cup-2022-viettel-fc-tiep-tuc-djung-djau-bang-i', 'Chiều 27-6, trên sân Thống Nhất, Viettel FC nhẹ nhàng đánh bại đại diện Campuchia, Phnom Penh Crown 1-0 ở lượt trận thứ 2 bảng I, AFC Cup 2022.', 'a', 'a.png', 'publish', '2021-07-29 23:49:17', '2021-07-29 23:00:34'),
(43, 1, 4, 'Quang Hải có bao nhiêu thời gian để chuẩn bị cho màn ra mắt ở CLB Pau FC?', 'quang-hai-co-bao-nhieu-thoi-gian-dje-chuan-bi-cho-man-ra-mat-o-clb-pau-fc', 'Dù chưa chính thức công bố hợp đồng, nhưng vừa qua tiền vệ Nguyễn Quang Hải được báo chí Pháp đưa tin sẽ gia nhập Pau FC để thi đấu ở Ligue 2 của Pháp. Vậy bến đỗ mới của Quang Hải là đội bóng như thế nào?', 'a', 'a.png', 'publish', '2022-06-22 20:25:57', '2022-06-15 20:25:57'),
(44, 1, 4, 'Lý Hoàng Nam thiết lập cột mốc mới cho quần vợt Việt Nam', 'ly-hoang-nam-thiet-lap-cot-moc-moi-cho-quan-vot-viet-nam', 'Tay vợt Lý Hoàng Nam vươn lên xếp 364 thế giới, thứ hạng cao nhất trong lịch sử của quần vợt Việt Nam.', 'a', 'a.png', 'publish', '2022-06-22 20:27:42', '2022-06-22 20:27:42'),
(45, 1, 4, 'Quang Hải sẽ đầu quân cho Pau FC của Pháp', 'quang-hai-se-djau-quan-cho-pau-fc-cua-phap', 'Ngày 27-6, Nguyễn Quang Hải sẽ di chuyển sang Pháp để kiểm tra y tế. Nếu vượt qua buổi kiểm tra y tế này, hợp đồng của Quang Hải với Pau FC tại Ligue 2 sẽ có hiệu lực, Quang Hải sẻ trở thành cầu thủ Việt Nam đầu tiên chơi bóng ở một giải chuyên nghiệp của Pháp.', 'a', 'a.png', 'publish', '2022-06-28 09:28:42', '2022-06-28 09:28:42'),
(46, 1, 4, 'Sức hút từ giải bóng rổ chuyên nghiệp Việt Nam', 'suc-hut-tu-giai-bong-ro-chuyen-nghiep-viet-nam', 'Sau hơn hai năm bị ảnh hưởng bởi dịch Covid-19, Giải bóng rổ chuyên nghiệp Việt Nam (VBA) năm 2022 trở lại hứa hẹn hấp dẫn với thể thức sân nhà-sân khách, cùng sự yêu mến của đông đảo khán giả.', 'a', 'a.png', 'publish', '2022-06-28 09:35:06', '2022-06-28 09:35:06'),
(47, 1, 4, 'Nam Định cầm chân Hà Nội trong trận đá bù vòng 3 V-League 2022', 'nam-djinh-cam-chan-ha-noi-trong-tran-dja-bu-vong-3-v-league-2022', 'Thi đấu lép vế hơn nhưng Nam Định FC bất ngờ cầm chân Hà Nội FC với tỷ số 1-1 vào chiều 26-6, trên sân Thiên Trường, tại trận đá bù vòng 3 V-League 2022.', 'a', 'a.png', 'publish', '2022-06-28 09:43:26', '2022-06-28 09:43:26'),
(48, 1, 6, 'Thiết kế môn Lịch sử cấp THPT gồm cả phần bắt buộc và lựa chọn', 'thiet-ke-mon-lich-su-cap-thpt-gom-ca-phan-bat-buoc-va-lua-chon', 'Ngày 27-6, Bộ Giáo dục và Đào tạo thông tin những nội dung Nghị quyết Kỳ họp thứ ba, Quốc hội khóa XV (Nghị quyết số 63/2022/QH15), trong đó có những chỉ đạo liên quan đến công tác giáo dục-đào tạo; thiết kế môn Lịch sử trong Chương trình giáo dục cấp trung học phổ thông (THPT); biên soạn và xuất bản sách giáo khoa.', 'a', 'a.png', 'publish', '2021-07-29 23:49:17', '2021-07-29 23:00:34'),
(49, 1, 6, 'Internet Việt Nam phát triển mạnh mẽ với tỷ lệ sử dụng đạt 70.3%', 'internet-viet-nam-phat-trien-manh-me-voi-ty-le-su-dung-djat-703', 'Đây là khẳng định của Thứ trưởng Bộ Thông tin và Truyền thông Phạm Đức Long tại Diễn đàn chuyên sâu về Internet với chủ đề “Tương lai của Internet” (The Future of Internet). Tham dự có gần 300 đại biểu là lãnh đạo, cán bộ các cơ quan nhà nước, các chuyên gia trong lĩnh vực viễn thông, Internet.', 'a', 'a.png', 'publish', '2022-06-22 20:25:57', '2022-06-15 20:25:57'),
(50, 1, 6, 'Chính thức ra mắt điện thoại Poco F4 tại Việt Nam', 'chinh-thuc-ra-mat-djien-thoai-poco-f4-tai-viet-nam', 'Poco đã chính thức ra mắt Poco F4, chiếc smartphone cao cấp mới nhất được dự đoán sẽ là sản phẩm đỉnh cao về sức mạnh nằm trong phân khúc của mình.', 'a', 'a.png', 'publish', '2022-06-22 20:27:42', '2022-06-22 20:27:42'),
(51, 1, 6, 'TP Hồ Chí Minh công bố điểm chuẩn lớp 10 chuyên và tích hợp năm học 2022-2023', 'tp-ho-chi-minh-cong-bo-djiem-chuan-lop-10-chuyen-va-tich-hop-nam-hoc-2022-2023', 'Chiều 27-6, Sở Giáo dục và Đào tạo (GD-ĐT) TP Hồ Chí Minh công bố điểm chuẩn lớp 10 chuyên và tích hợp năm học 2022-2023.', 'a', 'a.png', 'publish', '2022-06-28 09:28:42', '2022-06-28 09:28:42'),
(52, 1, 6, 'Xúc tiến đầu tư chất lượng cao vào Khu Công nghệ cao TP Hồ Chí Minh', 'xuc-tien-djau-tu-chat-luong-cao-vao-khu-cong-nghe-cao-tp-ho-chi-minh', 'Ngày 27-6, Ban Quản lý Khu Công nghệ cao TP Hồ Chí Minh tổ chức Hội nghị Xúc tiến đầu tư năm 2022, trao chứng nhận điều chỉnh đầu tư cho các dự án.', 'a', 'a.png', 'publish', '2022-06-28 09:35:06', '2022-06-28 09:35:06'),
(53, 1, 6, 'Vingroup trao 48 tỷ đồng học bổng du học Thạc sĩ, Tiến sĩ KHCN 2022, thành lập mạng lưới học giả trẻ toàn cầu', 'vingroup-trao-48-ty-djong-hoc-bong-du-hoc-thac-si-tien-si-khcn-2022-thanh-lap-mang-luoi-hoc-gia-tre-toan-cau', 'Ngày 24-6, Chương trình “Học bổng Khoa học Công nghệ (KHCN) Đào tạo Thạc sĩ, Tiến sĩ Du học Nước ngoài” của Tập đoàn Vingroup (Học bổng KHCN Vingroup) tổ chức Lễ trao học bổng cho 30 du học sinh bậc Thạc sĩ, Tiến sĩ - niên khóa 2022, đồng thời công bố ra mắt Mạng lưới Học giả trẻ Vingroup Toàn cầu.', 'a', 'a.png', 'publish', '2022-06-28 09:43:26', '2022-06-28 09:43:26'),
(54, 1, 6, 'Mở ngành học mới-đừng theo kiểu chộp giật', 'mo-nganh-hoc-moi-djung-theo-kieu-chop-giat', 'Tìm trong thông báo về việc tuyển đại học chính quy năm 2022 và dự thảo phương án tuyển sinh đại học chính quy năm 2022 của Trường Đại học Văn hóa Hà Nội, tôi đều không thấy chỉ tiêu dành cho Khoa Gia đình và Công tác xã hội. Tôi gọi điện hỏi mới biết, khoa đã dừng tuyển sinh mấy năm nay.', 'a', 'a.png', 'publish', '2022-06-28 09:47:41', '2022-06-28 09:47:41');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `post_tags`
--

CREATE TABLE `post_tags` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `post_id` bigint(20) UNSIGNED NOT NULL,
  `tag_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tags`
--

CREATE TABLE `tags` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `first_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `avatar` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `role` enum('owner','admin','moderator','guest') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'guest',
  `status` enum('active','inactive','banned') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'inactive',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `user_name`, `avatar`, `email`, `email_verified_at`, `password`, `remember_token`, `role`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Hieu', 'Le', 'hieukusok', NULL, 'admin01@gmail.com', NULL, '$2y$10$2a4MUQszhB/nnWG2BGRumeG29oEEHcp0uHRdixoY3tq2kfj/qhKBK', NULL, 'owner', 'active', '2022-06-21 06:12:20', '2022-06-21 06:12:20'),
(2, 'Test', 'None', 'hieukusok369', NULL, 'hieukusok@gg.com', NULL, '$2y$10$R1KqS06VNvdacFgerBqRD.A8Z0jZhG.xdJxfGueep5btVBj81qwDC', NULL, 'guest', 'active', '2022-06-23 03:58:51', '2022-06-23 03:58:51'),
(3, 'Test', 'None', 'hieukusok36945', NULL, 'hieukusffok@gg.com', NULL, '$2y$10$IBiXC.H7xF.1Y1MkQPpVbO8s2DrrYqtoJqisQZ2aALCmorH5iVq6G', NULL, 'guest', 'active', '2022-06-23 07:54:21', '2022-06-23 07:54:21'),
(4, 'frsdfsdfsdf', 'sdfsdfsdfsd', 'dsfsdfsdfsdfsd', NULL, 'fsdfdsf@gmial.com', NULL, '$2y$10$fP5AwGiNn99KKyaFzMBhU.bV8B2cx2YqIr3dpZu5k1EixgXsrpsZy', NULL, 'guest', 'active', '2022-06-23 08:51:51', '2022-06-23 08:51:51'),
(5, 'frsdfsdfsdfdsfs', 'sdfsdfsdfsdsdfsd', 'dsfsdfssdfsdfdfsdfsd', NULL, 'fsdfdsf@gmiafdfdsfl.com', NULL, '$2y$10$oP1VW03xqGeCdfJYTqDhWO7v3z6G349nnsL6w4KW8r5m5Vw4plfO2', NULL, 'guest', 'active', '2022-06-23 09:29:03', '2022-06-23 09:29:03'),
(6, 'hieuggg', 'Nguyenggg', 'hieukusokggg', NULL, 'gggg@gmnmail.com', NULL, '$2y$10$3Q26QdEbq0xv1680g3FA..aq.oJ3Q0oV/k0TluMBfAlh3gOxLOE1q', NULL, 'guest', 'active', '2022-06-23 09:32:46', '2022-06-23 09:32:46'),
(7, 'hieugggtt', 'Nguyengggttt', 'hieukusokgggtt', NULL, 'gggg@gmnttail.com', NULL, '$2y$10$oJbLxUanPUz5cRdFLzvGne/KiZCpgi5qIDfPNkXVzcQXAZYRxMFy.', NULL, 'guest', 'active', '2022-06-23 09:38:05', '2022-06-23 09:38:05'),
(8, 'hieugggtte', 'Nguyengggttte', 'hieukusokgggtte', NULL, 'gggg@gmnttail.come', NULL, '$2y$10$Vy42xNW6L7gNwNZf2jwiqu5Ln8i6tbZ2aK653xIZpZHdOEtrq2tle', NULL, 'guest', 'active', '2022-06-23 09:38:39', '2022-06-23 09:38:39'),
(9, 'hieugggtteu', 'Nguyengggttteu', 'hieukusokgggtteu', NULL, 'gggg@gmnttail.comeu', NULL, '$2y$10$Pq.3ZUmGvN35GdaXL5mL1ebmaR50qpo.bEL5D2EiloSyeRjUIvwHG', NULL, 'guest', 'active', '2022-06-23 09:39:54', '2022-06-23 09:39:54'),
(10, 'le', 'hieu', 'hieukusok1', NULL, 'levanhieu12a7@gmaddddil.com', NULL, '$2y$10$CcNoWoVMhSg7B155XjKuIe4YKiZifPpXv6o7H.vSLA9e4hnIn1C86', NULL, 'guest', 'active', '2022-06-23 14:16:43', '2022-06-23 14:16:43'),
(11, 'dddadad', 'dwdwd', 'testeref', NULL, '12345678@dawd.com', NULL, '$2y$10$Dj3dweT9NSfxtBjNAwKemuOUWTIkMqErqY27oLPpZfpXVVLZ28mX.', NULL, 'guest', 'active', '2022-06-24 01:31:25', '2022-06-24 01:31:25');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `categories_slug_unique` (`slug`);

--
-- Chỉ mục cho bảng `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Chỉ mục cho bảng `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Chỉ mục cho bảng `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Chỉ mục cho bảng `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `posts_slug_unique` (`slug`),
  ADD KEY `posts_user_id_foreign` (`user_id`),
  ADD KEY `posts_category_id_foreign` (`category_id`);

--
-- Chỉ mục cho bảng `post_tags`
--
ALTER TABLE `post_tags`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `post_tags_post_id_tag_id_unique` (`post_id`,`tag_id`),
  ADD KEY `post_tags_tag_id_foreign` (`tag_id`);

--
-- Chỉ mục cho bảng `tags`
--
ALTER TABLE `tags`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `tags_slug_unique` (`slug`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_user_name_unique` (`user_name`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT cho bảng `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT cho bảng `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT cho bảng `posts`
--
ALTER TABLE `posts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;

--
-- AUTO_INCREMENT cho bảng `post_tags`
--
ALTER TABLE `post_tags`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `tags`
--
ALTER TABLE `tags`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `posts_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`),
  ADD CONSTRAINT `posts_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Các ràng buộc cho bảng `post_tags`
--
ALTER TABLE `post_tags`
  ADD CONSTRAINT `post_tags_post_id_foreign` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `post_tags_tag_id_foreign` FOREIGN KEY (`tag_id`) REFERENCES `tags` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
