-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: July 25, 2020 at 07:04 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.2.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `frameshop`
--

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `product_details` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`product_details`)),
  `price` float DEFAULT NULL,
  `order_status` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`) VALUES
(1, '1-Stains'),
(2, '2-Colourful'),
(3, '3-Blacks'),
(4, '4-Whites'),
(5, '5-Golds'),
(6, '6-Silvers'),
(7, '7-Aluminium'),
(8, '8-Float for Canvas'),
(9, '9-Raw Timber');

-- --------------------------------------------------------

--
-- Table structure for table `frames`
--

CREATE TABLE `frames` (
  `id` int(11) NOT NULL,
  `code` varchar(255) DEFAULT NULL,
  `width` float DEFAULT NULL,
  `depth` float DEFAULT NULL,
  `rebate` float DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `rate` int(11) DEFAULT NULL,
  `min` int(11) DEFAULT NULL,
  `max` int(11) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `material` varchar(255) DEFAULT NULL,
  `thumb_image` varchar(255) DEFAULT NULL,
  `tile_image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `frames`
--

INSERT INTO `frames` (`id`, `code`, `width`, `depth`, `rebate`, `description`, `rate`, `min`, `max`, `category`, `material`, `thumb_image`, `tile_image`) VALUES
(75, '224S', 2, 2, 0.4, 'Scratch Silver', 3, 10, 92, '6-Silvers', 'Wood', '/public/static/images/frame_images/large/lrg_cross_frame_75.jpg?v=1', '/public/static/images/frame_images/large/top_frame_75.jpg?v=1'),
(229, '224H', 2, 2, 0.4, 'White', 1, 10, 92, '4-Whites', 'Wood', '/public/static/images/frame_images/large/lrg_cross_frame_229.jpg?v=2', '/public/static/images/frame_images/large/top_frame_229.jpg?v=2'),
(254, '224G', 2, 2, 0.4, 'Scratch Gold', 3, 10, 92, '5-Golds', 'Wood', '/public/static/images/frame_images/large/lrg_cross_frame_254.jpg?v=1', '/public/static/images/frame_images/large/top_frame_254.jpg?v=1'),
(331, 'AL-1Black', 1, 2, 0.7, 'Black', 4, 10, 100, '7-Aluminium', 'Aluminium', '/public/static/images/frame_images/large/lrg_cross_frame_331.jpg?v=1', '/public/static/images/frame_images/large/top_frame_331.jpg?v=1'),
(334, 'AL-5Pink', 1, 2, 0.7, 'Pink', 4, 10, 100, '7-Aluminium', 'Aluminium', '/public/static/images/frame_images/large/lrg_cross_frame_334.jpg?v=1', '/public/static/images/frame_images/large/top_frame_334.jpg?v=1'),
(335, 'AL-6Gold', 1, 2, 0.7, 'Gold', 4, 10, 100, '7-Aluminium', 'Aluminium', '/public/static/images/frame_images/large/lrg_cross_frame_335.jpg?v=1', '/public/static/images/frame_images/large/top_frame_335.jpg?v=1'),
(336, 'AL-7Silver', 1, 2, 0.7, 'Silver', 4, 10, 100, '7-Aluminium', 'Aluminium', '/public/static/images/frame_images/large/lrg_cross_frame_336.jpg?v=1', '/public/static/images/frame_images/large/top_frame_336.jpg?v=1'),
(607, '108G Float', 1.5, 3.5, 0, 'Black Gold', 10, 15, 250, '8-Float for Canvas', 'Wood', '/public/static/images/frame_images/large/lrg_cross_frame_607.jpg?v=1', '/public/static/images/frame_images/large/top_frame_607.jpg?v=1'),
(608, '108S Float', 1.5, 3.5, 0, 'Black Silver', 10, 15, 250, '8-Float for Canvas', 'Wood', '/public/static/images/frame_images/large/lrg_cross_frame_608.jpg?v=1', '/public/static/images/frame_images/large/top_frame_608.jpg?v=1'),
(609, '108F Float', 1.5, 3.5, 0, 'Black', 6, 15, 250, '8-Float for Canvas', 'Wood', '/public/static/images/frame_images/large/lrg_cross_frame_609.jpg?v=2', '/public/static/images/frame_images/large/top_frame_609.jpg?v=2'),
(610, '108H Float', 1.5, 3.5, 0, 'White', 6, 15, 250, '8-Float for Canvas', 'Wood', '/public/static/images/frame_images/large/lrg_cross_frame_610.jpg?v=2', '/public/static/images/frame_images/large/top_frame_610.jpg?v=2'),
(631, '221S', 2, 2, 0.5, 'Silver Champ', 4, 10, 120, '6-Silvers', 'Wood', '/public/static/images/frame_images/large/lrg_cross_frame_631.jpg?v=1', '/public/static/images/frame_images/large/top_frame_631.jpg?v=1'),
(724, '224HS', 2, 2, 0.5, 'White Silver', 3, 10, 92, '4-Whites', 'Wood', '/public/static/images/frame_images/large/lrg_cross_frame_724.jpg?v=1', '/public/static/images/frame_images/large/top_frame_724.jpg?v=1'),
(739, '222F', 1.3, 1.5, 0.5, 'Black', 3, 10, 62, '3-Blacks', 'Wood', '/public/static/images/frame_images/large/lrg_cross_frame_739.jpg?v=2', '/public/static/images/frame_images/large/top_frame_739.jpg?v=2'),
(740, '222H', 1.3, 1.5, 0.5, 'White', 3, 10, 62, '4-Whites', 'Wood', '/public/static/images/frame_images/large/lrg_cross_frame_740.jpg?v=2', '/public/static/images/frame_images/large/top_frame_740.jpg?v=2'),
(741, '222W', 1.3, 1.5, 0.5, 'Dark Walnut', 3, 10, 62, '1-Stains', 'Wood', '/public/static/images/frame_images/large/lrg_cross_frame_741.jpg?v=2', '/public/static/images/frame_images/large/top_frame_741.jpg?v=2'),
(743, '222A', 1.3, 1.5, 0.5, 'Honey', 3, 10, 62, '1-Stains', 'Wood', '/public/static/images/frame_images/large/lrg_cross_frame_743.jpg?v=2', '/public/static/images/frame_images/large/top_frame_743.jpg?v=2'),
(745, '222D', 1.3, 1.5, 0.5, 'Mocha', 3, 10, 62, '1-Stains', 'Wood', '/public/static/images/frame_images/large/lrg_cross_frame_745.jpg?v=6', '/public/static/images/frame_images/large/top_frame_745.jpg?v=6'),
(1027, '226H', 2, 1.5, 0.5, 'White', 2, 10, 62, '4-Whites', 'Wood', '/public/static/images/frame_images/large/lrg_cross_frame_1027.jpg?v=1', '/public/static/images/frame_images/large/top_frame_1027.jpg?v=1'),
(1159, '232LO', 3, 2, 0.5, 'Cream', 5, 10, 150, '9-Raw Timber', 'Wood', '/public/static/images/frame_images/large/lrg_cross_frame_1159.jpg?v=1', '/public/static/images/frame_images/large/top_frame_1159.jpg?v=1'),
(1197, '224RW', 2, 2, 0.5, 'Raw Ramin', 3, 10, 92, '9-Raw Timber', 'Wood', '/public/static/images/frame_images/large/lrg_cross_frame_1197.jpg?v=1', '/public/static/images/frame_images/large/top_frame_1197.jpg?v=1'),
(1228, '220D', 1.4, 1.4, 0.5, 'Mocha', 1, 10, 61, '1-Stains', 'Wood', '/public/static/images/frame_images/large/lrg_cross_frame_1228.jpg?v=3', '/public/static/images/frame_images/large/top_frame_1228.jpg?v=3'),
(1253, '224RO', 2, 2, 0.5, 'Raw Oak', 3, 10, 92, '9-Raw Timber', 'Wood', '/public/static/images/frame_images/large/lrg_cross_frame_1253.jpg?v=2', '/public/static/images/frame_images/large/top_frame_1253.jpg?v=2'),
(1257, '130PO', 1.5, 2, 0.5, 'Olive Pistachio', 4, 10, 61, '2-Colourful', 'Wood', '/public/static/images/frame_images/large/lrg_cross_frame_1257.jpg?v=1', '/public/static/images/frame_images/large/top_frame_1257.jpg?v=1'),
(1258, '130NO', 1.5, 2, 0.5, 'Navy', 4, 10, 61, '2-Colourful', 'Wood', '/public/static/images/frame_images/large/lrg_cross_frame_1258.jpg?v=1', '/public/static/images/frame_images/large/top_frame_1258.jpg?v=1'),
(1259, '130OO', 1.5, 2, 0.5, 'Orange', 4, 10, 61, '2-Colourful', 'Wood', '/public/static/images/frame_images/large/lrg_cross_frame_1259.jpg?v=1', '/public/static/images/frame_images/large/top_frame_1259.jpg?v=1'),
(1260, '130YO', 1.5, 2, 0.5, 'Lemon', 4, 10, 61, '2-Colourful', 'Wood', '/public/static/images/frame_images/large/lrg_cross_frame_1260.jpg?v=1', '/public/static/images/frame_images/large/top_frame_1260.jpg?v=1'),
(1261, '130RO', 1.5, 2, 0.5, 'Cherry', 4, 10, 61, '2-Colourful', 'Wood', '/public/static/images/frame_images/large/lrg_cross_frame_1261.jpg?v=1', '/public/static/images/frame_images/large/top_frame_1261.jpg?v=1'),
(1265, '130FO', 1.5, 2, 0.5, 'Black', 4, 10, 61, '3-Blacks', 'Wood', '/public/static/images/frame_images/large/lrg_cross_frame_1265.jpg?v=1', '/public/static/images/frame_images/large/top_frame_1265.jpg?v=1'),
(1268, 'AL7Silver', 1, 1, 0.7, 'Silver', 4, 10, 100, '6-Silvers', 'Aluminium', '/public/static/images/frame_images/large/lrg_cross_frame_1268.jpg?v=1', '/public/static/images/frame_images/large/top_frame_1268.jpg?v=1'),
(1269, 'AL6Gold', 1, 1, 0.7, 'Gold', 4, 10, 100, '5-Golds', 'Aluminium', '/public/static/images/frame_images/large/lrg_cross_frame_1269.jpg?v=1', '/public/static/images/frame_images/large/top_frame_1269.jpg?v=1'),
(1276, '108RW Float', 1.5, 3.5, 0, 'Natural Raw', 8, 15, 240, '8-Float for Canvas', 'Wood', '/public/static/images/frame_images/large/lrg_cross_frame_1276.jpg?v=1', '/public/static/images/frame_images/large/top_frame_1276.jpg?v=1'),
(1296, '133BR', 1.5, 3, 0.5, 'Bronze and Raw', 6, 10, 72, '5-Golds', 'Wood', '/public/static/images/frame_images/large/lrg_cross_frame_1296.jpg?v=1', '/public/static/images/frame_images/large/top_frame_1296.jpg?v=1'),
(1297, '133WH', 1.5, 3, 0.5, 'White and Raw', 7, 10, 85, '4-Whites', 'Wood', '/public/static/images/frame_images/large/lrg_cross_frame_1297.jpg?v=1', '/public/static/images/frame_images/large/top_frame_1297.jpg?v=1'),
(1331, '222G', 1.3, 1.5, 0.5, 'Light Stain', 1, 10, 62, '1-Stains', 'Wood', '/public/static/images/frame_images/large/lrg_cross_frame_1331.jpg?v=2', '/public/static/images/frame_images/large/top_frame_1331.jpg?v=2'),
(1337, '1202S', 1.5, 1.75, 0.5, 'Champagne Antique', 3, 10, 70, '6-Silvers', 'Wood', '/public/static/images/frame_images/large/lrg_cross_frame_1337.jpg?v=1', '/public/static/images/frame_images/large/top_frame_1337.jpg?v=1'),
(1338, '414G', 1.75, 2, 0.5, 'Gold', 4, 10, 70, '5-Golds', 'Wood', '/public/static/images/frame_images/large/lrg_cross_frame_1338.jpg?v=1', '/public/static/images/frame_images/large/top_frame_1338.jpg?v=1'),
(1339, '414S', 1.75, 2, 0.5, 'Silver', 4, 10, 70, '6-Silvers', 'Wood', '/public/static/images/frame_images/large/lrg_cross_frame_1339.jpg?v=1', '/public/static/images/frame_images/large/top_frame_1339.jpg?v=1'),
(1340, '414FG', 1.75, 2, 0.5, 'Black-Gold', 4, 10, 70, '3-Blacks', 'Wood', '/public/static/images/frame_images/large/lrg_cross_frame_1340.jpg?v=1', '/public/static/images/frame_images/large/top_frame_1340.jpg?v=1'),
(1435, '108RO Float', 1, 4.5, 0, 'Tasmanian Oak', 8, 15, 250, '8-Float for Canvas', 'Wood', '/public/static/images/frame_images/large/lrg_cross_frame_1435.jpg?v=3', '/public/static/images/frame_images/large/top_frame_1435.jpg?v=3'),
(1454, '103VL', 2, 4, 0.5, 'Straw', 4, 10, 160, '9-Raw Timber', 'Wood', '/public/static/images/frame_images/large/lrg_cross_frame_1454.jpg?v=13', '/public/static/images/frame_images/large/top_frame_1454.jpg?v=13'),
(1463, '108VO', 1.7, 3.5, 0, 'Oyster', 6, 15, 240, '8-Float for Canvas', 'Wood', '/public/static/images/frame_images/large/lrg_cross_frame_1463.jpg?v=4', '/public/static/images/frame_images/large/top_frame_1463.jpg?v=4'),
(1464, '108VG', 1.7, 3.5, 0, 'Smoke', 6, 15, 240, '8-Float for Canvas', 'Wood', '/public/static/images/frame_images/large/lrg_cross_frame_1464.jpg?v=2', '/public/static/images/frame_images/large/top_frame_1464.jpg?v=2'),
(1465, '108VA', 1.7, 3.5, 0, 'Arsenic', 6, 15, 240, '8-Float for Canvas', 'Wood', '/public/static/images/frame_images/large/lrg_cross_frame_1465.jpg?v=1', '/public/static/images/frame_images/large/top_frame_1465.jpg?v=1'),
(1466, '108VS', 1.7, 3.5, 0, 'Storm', 6, 15, 240, '8-Float for Canvas', 'Wood', '/public/static/images/frame_images/large/lrg_cross_frame_1466.jpg?v=2', '/public/static/images/frame_images/large/top_frame_1466.jpg?v=2'),
(1467, '108VH', 1.7, 3.5, 0, 'Soft White', 6, 15, 240, '8-Float for Canvas', 'Wood', '/public/static/images/frame_images/large/lrg_cross_frame_1467.jpg?v=1', '/public/static/images/frame_images/large/top_frame_1467.jpg?v=1'),
(1468, '108VL', 1.7, 3.5, 0, 'Natural', 6, 15, 240, '8-Float for Canvas', 'Wood', '/public/static/images/frame_images/large/lrg_cross_frame_1468.jpg?v=1', '/public/static/images/frame_images/large/top_frame_1468.jpg?v=1'),
(1506, '108FO', 1, 4.5, 0, 'Black Woodgrain', 10, 15, 250, '8-Float for Canvas', 'Wood', '/public/static/images/frame_images/large/lrg_cross_frame_1506.jpg?v=1', '/public/static/images/frame_images/large/top_frame_1506.jpg?v=1'),
(1520, '108HL Deep', 1.5, 4.5, 0, 'White', 10, 15, 250, '8-Float for Canvas', 'Wood', '/public/static/images/frame_images/large/lrg_cross_frame_1520.jpg?v=2', '/public/static/images/frame_images/large/top_frame_1520.jpg?v=2'),
(1521, '108FL Deep', 1.5, 4.5, 0, 'Black', 10, 15, 250, '8-Float for Canvas', 'Wood', '/public/static/images/frame_images/large/lrg_cross_frame_1521.jpg?v=1', '/public/static/images/frame_images/large/top_frame_1521.jpg?v=1'),
(1536, '105RO', 2, 4, 0.5, 'Raw Oak', 5, 10, 153, '9-Raw Timber', 'Wood', '/public/static/images/frame_images/large/lrg_cross_frame_1536.jpg?v=3', '/public/static/images/frame_images/large/top_frame_1536.jpg?v=3'),
(1539, '108HO', 1.7, 4, 0, 'White Woodgrain', 10, 15, 200, '8-Float for Canvas', 'Wood', '/public/static/images/frame_images/large/lrg_cross_frame_1539.jpg?v=1', '/public/static/images/frame_images/large/top_frame_1539.jpg?v=1'),
(1542, '830F', 1.7, 1.7, 0.5, 'Black', 3, 10, 100, '3-Blacks', 'Wood', '/public/static/images/frame_images/large/lrg_cross_frame_1542.jpg?v=2', '/public/static/images/frame_images/large/top_frame_1542.jpg?v=2');

-- --------------------------------------------------------

--
-- Table structure for table `gallery`
--

CREATE TABLE `gallery` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `size` int(11) NOT NULL,
  `width` int(11) NOT NULL,
  `height` int(11) NOT NULL,
  `aspect_ratio` int(11) NOT NULL,
  `date` timestamp(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  `timezone_type` int(11) NOT NULL,
  `timezone` varchar(255) NOT NULL,
  `thumbnail` varchar(255) NOT NULL,
  `small` varchar(255) NOT NULL,
  `medium` varchar(255) NOT NULL,
  `large` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `matboards`
--

CREATE TABLE `matboards` (
  `id` int(11) NOT NULL,
  `code` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `sort_order` int(11) DEFAULT NULL,
  `max_width` float DEFAULT NULL,
  `max_height` float DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `color_hex` varchar(255) DEFAULT NULL,
  `core_hex` varchar(255) DEFAULT NULL,
  `active` tinyint(1) DEFAULT NULL,
  `thumbnail` varchar(255) DEFAULT NULL,
  `tile` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `matboards`
--

INSERT INTO `matboards` (`id`, `code`, `name`, `description`, `sort_order`, `max_width`, `max_height`, `category`, `color_hex`, `core_hex`, `active`, `thumbnail`, `tile`) VALUES
(1, 'M11', 'Yellow', NULL, 151, 101.6, 152.4, 'White Core', '#FFF041', '#FFFFFF', 1, NULL, NULL),
(2, 'M40', 'Slate Green', NULL, 142, 101.6, 152.4, 'White Core', '#709B89', '#FFFFFF', 1, NULL, NULL),
(3, 'M12', 'Red Fire', NULL, 166, 101.6, 152.4, 'White Core', '#ce2e3d', '#FFFFFF', 1, NULL, NULL),
(4, 'M34', 'Black', NULL, 62, 101.6, 152.4, 'White Core', '#222222', '#FFFFFF', 1, NULL, NULL),
(6, 'M09', 'Old White', NULL, 87, 101.6, 152.4, 'White Core', '#FFFFEE', '#ffffff', 1, NULL, NULL),
(7, 'M19', 'Ivory', NULL, 79, 101.6, 152.4, 'White Core', '#FEFBF2', '#FFFFFF', 1, '/public/static/images/matboards/M19_Ivory_5a05952167b36_th.jpg', '/public/static/images/matboards/M19_Ivory_5a05952168452.jpg'),
(8, 'M20', 'Charcoal Grey', NULL, 63, 101.6, 152.4, 'White Core', '#4e4e4e', '#FFFFFF', 1, NULL, NULL),
(9, 'M23', 'Wine', NULL, 164, 101.6, 152.4, 'White Core', '#7e474e', '#FFFFFF', 1, NULL, NULL),
(10, 'M26', 'Peach', NULL, 92, 101.6, 162.5, 'White Core', '#FEEFDC', '#FFFFFF', 1, NULL, NULL),
(11, 'M27', 'Cerulean Blue', NULL, 120, 101.6, 81.3, 'White Core', '#156dcc', '#FFFFFF', 1, NULL, NULL),
(12, 'M45', 'Mustard yellow', NULL, 152, 101.6, 152.4, 'White Core', '#FFDA74', '#FFFFFF', 1, NULL, NULL),
(13, 'M47', 'Off White', NULL, 73, 101.6, 152.4, 'White Core', '#FFFDF8', '#FFFFFF', 1, NULL, NULL),
(14, 'M50', 'Deep Red', NULL, 167, 101.6, 152.4, 'White Core', '#b62c4d', '#FFFFFF', 1, NULL, NULL),
(15, 'M55', 'Very White', NULL, 72, 101.6, 152.4, 'White Core', '#FDFDFF', '#FFFFFF', 1, NULL, NULL),
(16, 'M63', 'Flag Blue', NULL, 119, 101.6, 152.4, 'White Core', '#3957B5', '#FFFFFF', 1, NULL, NULL),
(17, 'M17', 'Navy Blue', NULL, 123, 101.6, 152.4, 'White Core', '#143259', '#FFFFFF', 1, NULL, NULL),
(18, 'M77', 'Dark Green', NULL, 147, 101.6, 152.4, 'White Core', '#143C38', '#FFFFFF', 1, NULL, NULL),
(20, 'M21', 'Green', NULL, 146, 101.6, 152.4, 'White Core', '#3C553C', '#FFFFFF', 1, NULL, NULL),
(21, 'M81', 'Wheat', NULL, 96, 101.6, 152.4, 'White Core', '#b8b0a1', '#FFFFFF', 1, NULL, NULL),
(22, 'M58', 'Forest Green', NULL, 144, 101.6, 152.4, 'White Core', '#5A7233', '#FFFFFF', 1, NULL, NULL),
(23, 'M79', 'Orange', NULL, 154, 101.6, 152.4, 'White Core', '#E47443', '#FFFFFF', 1, NULL, NULL),
(24, 'M74', 'Navy Dark', NULL, 124, 101.6, 152.4, 'White Core', '#3f485f', '#FFFFFF', 1, NULL, NULL),
(25, 'M36', 'Baby Blue', NULL, 113, 81.3, 101.6, 'White Core', '#94B2D1', '#FFFFFF', 1, NULL, NULL),
(26, 'M38', 'Jade', NULL, 140, 101.6, 152.4, 'White Core', '#98B79B', '#FFFFFF', 1, NULL, NULL),
(27, 'M69', 'Chocolate', NULL, 105, 101.6, 152.4, 'White Core', '#413630', '#FFFFFF', 1, NULL, NULL),
(28, 'M72', 'Pale Green', NULL, 138, 101.6, 152.4, 'White Core', '#d3d5b7', '#FFFFFF', 1, NULL, NULL),
(29, 'M62', 'Dark Terracotta', NULL, 160, 101.6, 152.4, 'White Core', '#A54C42', '#FFFFFF', 1, NULL, NULL),
(30, 'M76', 'Grey', NULL, 66, 101.6, 152.4, 'White Core', '#a6a7b3', '#FFFFFF', 1, NULL, NULL),
(31, 'M66', 'Light Grey', NULL, 70, 101.6, 81.3, 'White Core', '#ebe9e1', '#FFFFFF', 1, '/public/static/images/matboards/M66_Light_Grey_5d1c376aee476_th.jpg', '/public/static/images/matboards/M66_Light_Grey_5d1c376aefb58.jpg'),
(32, 'M78', 'Orange Yellow', NULL, 153, 101.6, 152.4, 'White Core', '#FDC719', '#FFFFFF', 1, NULL, NULL),
(33, 'M51', 'Oxford Blue', NULL, 118, 101.6, 152.4, 'White Core', '#386072', '#FFFFFF', 1, NULL, NULL),
(34, 'M48', 'Cream', NULL, 91, 101.6, 152.4, 'White Core', '#FFF5CC', '#FFFFFF', 1, NULL, NULL),
(35, 'M04', 'Coffee Bean', NULL, 106, 101.6, 81.5, 'White Core', '#444239', '#FFFFFF', 1, NULL, NULL),
(36, 'M18', 'Mid Blue', NULL, 114, 101.6, 152.4, 'White Core', '#8496c3', '#FFFFFF', 1, NULL, NULL),
(37, 'M43', 'Peregrine Blue', NULL, 121, 101.6, 152.4, 'White Core', '#1E407D', '#FFFFFF', 1, NULL, NULL),
(39, 'M46', 'Madagascar pink', NULL, 129, 101.6, 152.4, 'White Core', '#FEC8DB', '#FFFFFF', 1, NULL, NULL),
(40, 'M308', 'Dusty Pink', NULL, 127, 120, 82, 'White Core', '#aa6d82', '#FFFFFF', 1, NULL, NULL),
(41, 'M67', 'Purple', NULL, 135, 101.6, 152.4, 'White Core', '#AC8ED9', '#FFFFFF', 1, NULL, NULL),
(42, 'M39', 'Dark Purple', NULL, 136, 101.6, 152.4, 'White Core', '#7F4DB2', '#FFFFFF', 1, NULL, NULL),
(43, 'M05', 'Teal', NULL, 148, 101.5, 152.5, 'White Core', '#80d4d6', '#FFFFFF', 1, NULL, NULL),
(44, 'M61', 'Burgundy', NULL, 162, 101.6, 152.4, 'White Core', '#702C4E', '#FFFFFF', 1, NULL, NULL),
(45, 'M60', 'Silver (Shiny)', NULL, 169, 101.6, 152.4, 'White Core', '#C1C1C1', '#FFFFFF', 1, '/public/static/images/matboards/M60_Silver_Shiny_59f66ca8a4654_th.jpg', '/public/static/images/matboards/M60_Silver_Shiny_59f66ca8aea7b.jpg'),
(46, 'M305', 'Dark Brown', NULL, 109, 101.6, 152.4, 'White Core', '#48423b', '#FFFFFF', 1, '/public/static/images/matboards/M25A_Dark_Brown_5b650384c9b6d_th.jpg', '/public/static/images/matboards/M25A_Dark_Brown_5b650384caf3a.jpg'),
(47, 'M02', 'Dove', NULL, 74, 101.6, 152.4, 'White Core', '#FFFFF3', '#FFFFFF', 1, '/public/static/images/matboards/M02_Dove_5a05969f704a9_th.jpg', '/public/static/images/matboards/M02_Dove_5a05969f70d7c.jpg'),
(48, 'M56', 'Ironwood', NULL, 100, 101.6, 152.4, 'White Core', '#5d4345', '#FFFFFF', 1, NULL, NULL),
(49, 'M57', 'Bright Silver (Shiny)', NULL, 168, 101.6, 152.4, 'White Core', '#DCDDDD', '#FFFFFF', 1, '/public/static/images/matboards/M57_Bright_Silver_Shiny_59f4022439565_th.jpg', '/public/static/images/matboards/M57_Bright_Silver_Shiny_59f4022439f2e.jpg'),
(50, 'M54', 'Gold (Shiny)', NULL, 171, 101.6, 152.4, 'White Core', '#a7970a', '#FFFFFF', 1, '/public/static/images/matboards/M54_Gold_Shiny_5d1ad199d3261_th.jpg', '/public/static/images/matboards/M54_Gold_Shiny_5d1ad199ded76.jpg'),
(51, 'M28', 'Old Gold (Shiny)', NULL, 175, 101.6, 152.4, 'White Core', '#d1b266', '#FFFFFF', 1, '/public/static/images/matboards/M28_Bronze_Shiny_59f4006edf46f_th.jpg', '/public/static/images/matboards/M28_Bronze_Gold_Shiny_5a02ff7483a3b.jpg'),
(52, 'M32', 'Gold Nugget (Satin)', NULL, 173, 101.6, 152.4, 'White Core', '#d2c59a', '#FFFFFF', 1, '/public/static/images/matboards/M32_Light_Gold_Shiny_59f685ee05ff2_th.jpg', '/public/static/images/matboards/M32_Light_Gold_Shiny_59f685ee06bd4.jpg'),
(53, 'M35', 'Hot Pink', NULL, 128, 101.6, 152.4, 'White Core', '#FF8BC2', '#FFFFFF', 1, NULL, NULL),
(54, 'M33', 'Mocha Green', NULL, 107, 101.6, 152.4, 'White Core', '#524e40', '#FFFFFF', 1, NULL, NULL),
(55, 'M03', 'Kelly Green', NULL, 149, 101.6, 81.2, 'White Core', '#33AA00', '#FFFFFF', 1, NULL, NULL),
(56, 'M303', 'Apple Green', NULL, 150, 101.6, 152.4, 'White Core', '#CEF76E', '#FFFFFF', 1, NULL, NULL),
(57, 'M41', 'Champagne', NULL, 170, 101.6, 152.4, 'White Core', '#dee0d6', '#FFFFFF', 1, '/public/static/images/matboards/M41_Satin_Gold_Shiny_59f3ffb055606_th.jpg', '/public/static/images/matboards/M41_Satin_Gold_Shiny_59f3ffb0566d0.jpg'),
(58, 'M10-BC', 'White', 'undefined', 16, 101.6, 152.4, 'Black Core', '#FFFFFF', '#000000', 1, NULL, NULL),
(59, 'M49-BC', 'Black', 'undefined', 0, 101.6, 152.4, 'Black Core', '#000000', '#4a4a4a', 1, '/public/static/images/matboards/M149_Black_59f3ee6664c50_th.jpg', '/public/static/images/matboards/M149_Black_59f3ee666559e.jpg'),
(60, 'M206', 'Burgundy Leather', 'undefined', 102, 101.6, 82.3, 'White Core', '#491c16', '#FFFFFF', 1, '/public/static/images/matboards/M206_Burgundy_leather_59f69d04bafe1_th.jpg', '/public/static/images/matboards/M206_Burgundy_Leather_5a029bae96537.jpg'),
(64, 'M215', 'Textured Rustic', 'undefined', 101, 101.6, 152.4, 'White Core', '#593c34', '#FFFFFF', 1, '/public/static/images/matboards/M215_Textured_Rustic_5b64f811b5e22_th.jpg', '/public/static/images/matboards/M215_Textured_Rustic_5b64f811b7835.jpg'),
(65, 'M210', 'Textured Navy', 'undefined', 125, 101.6, 152.4, 'White Core', '#242834', '#FFFFFF', 1, '/public/static/images/matboards/M210_Textured_Navy_59f7b3be91a48_th.jpg', '/public/static/images/matboards/M210_Textured_Navy_59f7b3be96744.jpg'),
(67, 'M203', 'Woodburn Texture', 'undefined', 108, 101.6, 152.4, 'White Core', '#47433d', '#FFFFFF', 1, '/public/static/images/matboards/M203_Woodburn_Texture_59f7bb01166ff_th.jpg', '/public/static/images/matboards/M203_Woodburn_Texture_59f7bb0119c5c.jpg'),
(68, 'M214', 'Crocodile Brown', 'undefined', 104, 101.6, 152.4, 'White Core', '#605741', '#FFFFFF', 1, '/public/static/images/matboards/M214_Crocodile_Brown_5b64f77539ed3_th.jpg', '/public/static/images/matboards/M214_Crocodile_Brown_5b64f7753a8df.jpg'),
(69, 'M213', 'Juniper', 'undefined', 141, 101.6, 152.4, 'White Core', '#728684', '#FFFFFF', 1, '/public/static/images/matboards/M213_Juniper_59f81cae4ffbb_th.jpg', '/public/static/images/matboards/M213_Juniper_59f81cae50bc1.jpg'),
(71, 'M211', 'Cocoa Bean', 'undefined', 99, 101.6, 152.4, 'White Core', '#543b3b', '#FFFFFF', 1, NULL, NULL),
(72, 'MG9054', 'Museum Black', 'undefined', 59, 101.6, 152.4, 'Museum', '#000000', '#424242', 1, NULL, NULL),
(73, 'MG9004', 'Museum White', 'undefined', 60, 101.6, 152.4, 'Museum', '#FFFFFF', '#dfdfdf', 1, NULL, NULL),
(74, 'MG9024', 'Museum Off White', 'undefined', 61, 101.6, 152.4, 'Museum', '#fcfdf7', '#dfdfdf', 1, NULL, NULL),
(75, 'M37', 'Cream', 'undefined', 89, 101.6, 152.4, 'White Core', '#ffffe2', '#FFFFFF', 1, NULL, NULL),
(76, 'M84-BC', 'Purple', 'undefined', 47, 101.6, 152.4, 'Black Core', '#7F4DB2', '#000000', 1, NULL, NULL),
(77, 'M13-BC', 'Off White', 'undefined', 17, 101.6, 152.4, 'Black Core', '#f4f4ea', '#000000', 1, NULL, NULL),
(78, 'M101BC', 'Jungle Green', 'undefined', 51, 101.6, 152.4, 'Black Core', '#5e786f', '#000000', 1, NULL, NULL),
(79, 'M01', 'Jungle Green', 'undefined', 145, 101.6, 152.4, 'White Core', '#5e786f', '#FFFFFF', 1, NULL, NULL),
(80, 'M68', 'Soapstone', 'undefined', 83, 101.6, 152.4, 'White Core', '#e9e2d9', '#FFFFFF', 1, NULL, NULL),
(81, 'M301', 'London Grey', 'undefined', 64, 101.6, 152.4, 'White Core', '#777F80', '#FFFFFF', 1, NULL, NULL),
(82, 'M106-BC', 'Calvary red', 'undefined', 35, 101.6, 152.4, 'Black Core', '#7f2c49', '#000000', 1, NULL, NULL),
(83, 'M88-BC', 'Silver (Shiny)', 'undefined', 56, 101.6, 152.4, 'Black Core', '#000000', '#000000', 1, '/public/static/images/matboards/M160-BC_Silver_Shiny_5a72aedfb2cb5_th.jpg', '/public/static/images/matboards/M160-BC_Silver_Shiny_5a72aedfb3fa1.jpg'),
(84, 'M82', 'Ice Pink', 'undefined', 131, 101.6, 81.5, 'White Core', '#f9e5fb', '#FFFFFF', 1, NULL, NULL),
(85, 'M87-BC', 'Soft Pink', 'undefined', 38, 101.6, 152.4, 'Black Core', '#F7CFDA', '#000000', 1, NULL, NULL),
(86, 'M52-BC', 'Deep Green', 'undefined', 54, 101.6, 81.5, 'Black Core', '#546b5b', '#000000', 1, '/public/static/images/matboards/M52-BC_Deep_Green_5d1bfbc1ce4f1_th.jpg', '/public/static/images/matboards/M52-BC_Deep_Green_5d1bfbc1cf071.jpg'),
(88, 'M85', 'Deep Purple', 'undefined', 137, 101.6, 81.5, 'White Core', '#3b1f7f', '#FFFFFF', 1, NULL, NULL),
(89, 'M89-BC', 'English Lace', 'undefined', 48, 101.6, 152, 'Black Core', '#e7f0da', '#000000', 1, NULL, NULL),
(90, 'M90-BC', 'Deep Red', 'undefined', 34, 101.6, 81.5, 'Black Core', '#ba324d', '#000000', 1, '/public/static/images/matboards/M90-BC_Mountbatten_Pink_5d1fdf91f0a0b_th.jpg', '/public/static/images/matboards/M90-BC_Mountbatten_Pink_5d1fdf91f240d.jpg'),
(92, 'M29', 'Rust', 'undefined', 158, 101.6, 81.3, 'White Core', '#AA6051', '#FFFFFF', 1, NULL, NULL),
(93, 'M98', 'Strike Master', 'undefined', 126, 101.6, 152.4, 'White Core', '#93687B', '#FFFFFF', 1, NULL, NULL),
(94, 'M313-BC', 'Light Clay', 'undefined', 24, 101.6, 81.3, 'Black Core', '#e9ca9d', '#000000', 1, NULL, NULL),
(95, 'M99-BC', 'Wheat', 'undefined', 31, 101.6, 152.4, 'Black Core', '#CABD97', '#000000', 1, '/public/static/images/matboards/M99-BC_Wheat_5f150c0da99c2_th.jpg', '/public/static/images/matboards/M99-BC_Wheat_5f150c0dada6a.jpg'),
(97, 'M100-BC', 'Moss', 'undefined', 49, 101.6, 152.4, 'Black Core', '#b6c2b2', '#000000', 1, NULL, NULL),
(98, 'M104-BC', 'White (Green Tint)', 'undefined', 25, 101.6, 152.4, 'Black Core', '#e6ebe4', '#000000', 1, NULL, NULL),
(100, 'M108', 'Taupe', 'undefined', 93, 101.6, 152.4, 'White Core', '#d0c3b5', '#FFFFFF', 1, '/public/static/images/matboards/M108_Crescendo_Grey_5d1ff3f63f7f8_th.jpg', '/public/static/images/matboards/M108_Crescendo_Grey_5d1ff3f640fc8.jpg'),
(101, 'M110', 'Cobalt Blue', 'undefined', 122, 81.5, 101.6, 'White Core', '#242f73', '#FFFFFF', 1, NULL, NULL),
(102, 'M115-BC', 'Brushed Gold (Shiny)', 'undefined', 57, 101.6, 152.4, 'Black Core', '#c5c288', '#000000', 1, '/public/static/images/matboards/M115-BC_Brushed_Gold_5b5fcf89a4b26_th.jpg', '/public/static/images/matboards/M115-BC_Brushed_Gold_5b5fcf89a5bc4.jpg'),
(104, 'M103-BC', 'Pink Marble', 'undefined', 41, 101.6, 152.4, 'Black Core', '#d38e9e', '#000000', 1, '/public/static/images/matboards/M103-BC_Pink_Marble_5b5fde8fe0475_th.jpg', '/public/static/images/matboards/M103-BC_Pink_Marble_5b5fde8fe0f55.jpg'),
(105, 'M123-BC', 'Dusty Pink Marble', 'undefined', 40, 101.6, 152.4, 'Black Core', '#d2aaa5', '#000000', 1, '/public/static/images/matboards/M123-BC_Dusty_Pink_Marble_5b5fe05c92f1b_th.jpg', '/public/static/images/matboards/M123-BC_Dusty_Pink_Marble_5b5fe05c939f3.jpg'),
(106, 'M102-BC', 'Yellow Marble', 'undefined', 29, 101.6, 152.4, 'Black Core', '#f4ebcb', '#000000', 1, '/public/static/images/matboards/M102-BC_Yellow_Marble_5b5fe2150d125_th.jpg', '/public/static/images/matboards/M102-BC_Yellow_Marble_5b5fe2150db8e.jpg'),
(107, 'M120-BC', 'Cream Fine Texture', 'undefined', 26, 101.6, 152.4, 'Black Core', '#eaeade', '#000000', 1, '/public/static/images/matboards/M120-BC_Cream_Fine_Texture_5b5fe49777b80_th.jpg', '/public/static/images/matboards/M120-BC_Cream_Fine_Texture_5b5fe497785a6.jpg'),
(110, 'M130-BC', 'Arctic White', 'undefined', 18, 101.6, 152.4, 'Black Core', '#f8f8f5', '#000000', 1, '/public/static/images/matboards/M130-BC_Artic_White_5b6008cd43843_th.jpg', '/public/static/images/matboards/M130-BC_Artic_White_5b6008cd44237.jpg'),
(111, 'M140-BC', 'Beige Linen', 'undefined', 33, 101.6, 152.4, 'Black Core', '#edeeec', '#000000', 1, '/public/static/images/matboards/M140-BC_Beige_Linen_5b611ab404b7d_th.jpg', '/public/static/images/matboards/M140-BC_Beige_Linen_5b611ab405617.jpg'),
(112, 'M142-BC', 'Soft Pink', 'undefined', 19, 101.6, 81.5, 'Black Core', '#ebc5c3', '#000000', 1, '/public/static/images/matboards/M142-BC_Soft_Pink_5d1fe9290b34a_th.jpg', '/public/static/images/matboards/M142-BC_Soft_Pink_5d1fe9290d444.jpg'),
(113, 'M141-BC', 'Copen Blue', 'undefined', 45, 101.6, 81.3, 'Black Core', '#7495b6', '#000000', 1, '/public/static/images/matboards/M141-BC_Copen_Blue_5b611ef145796_th.jpg', '/public/static/images/matboards/M141-BC_Copen_Blue_5b611ef146185.jpg'),
(114, 'M111-BC', 'Navy', 'undefined', 37, 101.6, 152.4, 'Black Core', '#243a5f', '#000000', 1, '/public/static/images/matboards/M111_Navy_5b6122572a5db_th.jpg', '/public/static/images/matboards/M111_Navy_5b6122572afd4.jpg'),
(115, 'M114-BC', 'Chocolate', 'undefined', 36, 101.6, 152.4, 'Black Core', '#4d433e', '#000000', 1, '/public/static/images/matboards/M114-BC_Chocolate_5b613d3e352c9_th.jpg', '/public/static/images/matboards/M114-BC_Chocolate_5b613d3e35e6a.jpg'),
(116, 'M112-BC', 'Pink', 'undefined', 39, 101.6, 152.4, 'Black Core', '#000000', '#000000', 1, '/public/static/images/matboards/M112-BC_Pink_5b623f79ea627_th.jpg', '/public/static/images/matboards/M112-BC_Pink_5b623f79ef167.jpg'),
(117, 'M113-BC', 'Fawn', 'undefined', 30, 81.3, 101.6, 'Black Core', '#d2c8b3', '#000000', 1, '/public/static/images/matboards/M113_Fawn_5b62488662798_th.jpg', '/public/static/images/matboards/M113_Fawn_5b62488665358.jpg'),
(118, 'M132-BC', 'Light Grey', 'undefined', 27, 101.6, 152.4, 'Black Core', '#d0cfcf', '#000000', 1, '/public/static/images/matboards/M132-BC_Very_Light_Cream_5d1fec8d46068_th.jpg', '/public/static/images/matboards/M132-BC_Very_Light_Cream_5d1fec8d4768a.jpg'),
(119, 'M126-BC', 'Dogwood', 'undefined', 32, 101.6, 152.4, 'Black Core', '#dec191', '#000000', 1, '/public/static/images/matboards/M126-BC_Wheat-2_5cf0b91ab3f99_th.jpg', '/public/static/images/matboards/M126-BC_Wheat-2_5cf0b91ab4b35.jpg'),
(121, 'M128-BC', 'Chalk', 'undefined', 21, 101.6, 152.4, 'Black Core', '#e2e3e5', '#000000', 1, '/public/static/images/matboards/M128-BC_Chalk_5b650776cf1a4_th.jpg', '/public/static/images/matboards/M128-BC_Chalk_5b650776cfb51.jpg'),
(122, 'M125-BC', 'White Elephant', 'undefined', 22, 101.6, 152.4, 'Black Core', '#FCFFF5', '#000000', 1, '/public/static/images/matboards/M125-BC_White_Elephant_5f163d46508df_th.jpg', '/public/static/images/matboards/M125-BC_White_Elephant_5f163d4653cdf.jpg'),
(124, 'M116-BC', 'Holly Green', 'undefined', 52, 101.6, 152.4, 'Black Core', '#5a7145', '#000000', 1, '/public/static/images/matboards/M116-BC_Holly_Green_5b651158bad1d_th.jpg', '/public/static/images/matboards/M116-BC_Holly_Green_5b651158bb785.jpg'),
(125, 'M117-BC', 'Terracotta', 'undefined', 14, 101.6, 152.4, 'Black Core', '#8e5c41', '#000000', 1, '/public/static/images/matboards/M117-BC_Terracotta_5b6512584a299_th.jpg', '/public/static/images/matboards/M117-BC_Terracotta_5b6512584ac7a.jpg'),
(126, 'M118-BC', 'Beige (Textured)', 'undefined', 4, 101.6, 152.4, 'Black Core', '#dcdcca', '#000000', 1, '/public/static/images/matboards/M118-BC_beige1_5b6513a886e85_th.jpg', '/public/static/images/matboards/M118-BC_beige1_5b6513a887855.jpg'),
(127, 'M119-BC', 'Beige (Shadowed)', 'undefined', 5, 101.6, 152.4, 'Black Core', '#e2e2d3', '#000000', 1, '/public/static/images/matboards/M119-BC_Beige-2_5b651827190d9_th.jpg', '/public/static/images/matboards/M119-BC_Beige-2_5b65182719a93.jpg'),
(128, 'M121-BC', 'Patriot Blue', 'undefined', 44, 101.6, 152.4, 'Black Core', '#558fa8', '#000000', 1, '/public/static/images/matboards/M121-BC_Patriot_Blue_5b651b01aa9bb_th.jpg', '/public/static/images/matboards/M121-BC_Patriot_Blue_5b651b01ab3b8.jpg'),
(129, 'M122-BC', 'Orchid', 'undefined', 6, 101.6, 81.3, 'Black Core', '#9e6890', '#000000', 1, '/public/static/images/matboards/M122-BC_Orchid_5b651db4c2f14_th.jpg', '/public/static/images/matboards/M122-BC_Orchid_5b651db4c38f9.jpg'),
(130, 'M134-BC', 'Yellow', 'undefined', 7, 101.6, 152.4, 'Black Core', '#dcd958', '#000000', 1, NULL, NULL),
(131, 'M136-BC', 'Green', 'undefined', 53, 101.6, 152.4, 'Black Core', '#466144', '#000000', 1, '/public/static/images/matboards/M136-BC_Green_5b679df6a62a6_th.jpg', '/public/static/images/matboards/M136-BC_Green_5b679df6a6cb9.jpg'),
(132, 'M137-BC', 'Brandy Rose', 'undefined', 8, 101.6, 152.4, 'Black Core', '#be997f', '#000000', 1, '/public/static/images/matboards/M137-BC_Brandy_Rose_5b67a0d3c573a_th.jpg', '/public/static/images/matboards/M137-BC_Brandy_Rose_5b67a0d3c6127.jpg'),
(133, 'M139-BC', 'Submarine', 'undefined', 9, 101.6, 152.4, 'Black Core', '#c3cacc', '#000000', 1, NULL, NULL),
(134, 'M135-BC', 'Green Spring', 'undefined', 10, 101.6, 152.4, 'Black Core', '#c0c8bb', '#000000', 1, '/public/static/images/matboards/M135-BC_Green_Spring_5b67a9e46a159_th.jpg', '/public/static/images/matboards/M135-BC_Green_Spring_5b67a9e46ab4a.jpg'),
(135, 'M133-BC', 'Dover White', 'undefined', 11, 101.6, 152.4, 'Black Core', '#e3e4de', '#000000', 1, NULL, NULL),
(136, 'M15', 'Porcelain (Blue Tint)', 'undefined', 110, 120, 81.3, 'White Core', '#dae3fa', '#FFFFFF', 1, NULL, NULL),
(137, 'M14', 'Rich Orange', 'undefined', 155, 101.6, 81.5, 'White Core', '#dd4a35', '#FFFFFF', 1, NULL, NULL),
(139, 'M306', 'Misty Red', 'undefined', 165, 101.6, 81.5, 'White Core', '#d53d4d', '#FFFFFF', 1, NULL, NULL),
(141, 'M07', 'Pastel Blue', 'undefined', 111, 120, 81.3, 'White Core', '#bcebf6', '#FFFFFF', 1, NULL, NULL),
(142, 'M08', 'Sugared Almond', 'undefined', 80, 120, 81.5, 'White Core', '#fff7f5', '#FFFFFF', 1, NULL, NULL),
(145, 'M64', 'Light Cream', 'undefined', 85, 101.6, 152.4, 'White Core', '#f7f2e9', '#FFFFFF', 1, '/public/static/images/matboards/M64_Light_Cream_5d1c421d1136c_th.jpg', '/public/static/images/matboards/M64_Light_Cream_5d1c421d14322.jpg'),
(147, 'M73', 'Textured Blue', 'undefined', 117, 101.6, 81.3, 'White Core', '#5a88bc', '#FFFFFF', 1, '/public/static/images/matboards/M73_Textured_Blue_5d1c350f14ad6_th.jpg', '/public/static/images/matboards/M73_Textured_Blue_5d1c350f161c5.jpg'),
(148, 'M83-BC', 'Gold (Shiny)', 'undefined', 58, 101.6, 152.4, 'Black Core', '#ccb673', '#000000', 1, '/public/static/images/matboards/M83_Shiny_Gold_BC_5d1ad219e6ccd_th.jpg', '/public/static/images/matboards/M83_Shiny_Gold_BC_5d1ad219eab9a.jpg'),
(149, 'M42', 'Sandstone off white', 'undefined', 82, 101.6, 152.4, 'White Core', '#d6d9d3', '#FFFFFF', 1, '/public/static/images/matboards/M42_Sandstone_off_white_5e840a03cb929_th.jpg', '/public/static/images/matboards/M42_Sandstone_off_white_5e840a03d41d2.jpg'),
(150, 'M44', 'Twilight Cream', 'undefined', 84, 101.6, 152.4, 'White Core', '#eee7d4', '#FFFFFF', 1, '/public/static/images/matboards/M44_M44_Twilight_Cream_5d1c2ac14c6c6_th.jpg', '/public/static/images/matboards/M44_M44_Twilight_Cream_5d1c2ac1501ae.jpg'),
(153, 'M109', 'Peacock Blue', 'undefined', 143, 101.6, 81.3, 'White Core', '#54938d', '#FFFFFF', 1, '/public/static/images/matboards/M109_Peacock_Blue_5d1fe1abb2994_th.jpg', '/public/static/images/matboards/M109_Peacock_Blue_5d1fe1abb40c0.jpg'),
(154, 'M105-BC', 'Mios', 'undefined', 1, 101.6, 152.4, 'Black Core', '#ded4c2', '#000000', 1, '/public/static/images/matboards/M105-BC_Mios_5d1fe44313fd6_th.jpg', '/public/static/images/matboards/M105-BC_Mios_5d1fe4431584a.jpg'),
(155, 'M144-BC', 'Light Berry', 'undefined', 2, 101.6, 81.5, 'Black Core', '#c7838b', '#000000', 1, '/public/static/images/matboards/M144-BC_Light_Berry_5d1feff7b2661_th.jpg', '/public/static/images/matboards/M144-BC_Light_Berry_5d1feff7b3d95.jpg'),
(157, 'M302', 'Cameo', 'undefined', 94, 81.5, 101.6, 'White Core', '#dcbca9', '#FFFFFF', 1, '/public/static/images/matboards/3-75_Cameo_5d2bd86ae1a2e_th.jpg', '/public/static/images/matboards/3-75_Cameo_5d2bd86ae7e7d.jpg'),
(159, 'M309', 'Cream (Pink Tint)', 'undefined', 88, 101.6, 152.4, 'White Core', '#fffcde', '#ffffff', 1, NULL, NULL),
(160, 'M24', 'Light Mint', 'undefined', 139, 101.6, 152.4, 'White Core', '#DEF1D1', '#FFFFFF', 1, NULL, NULL),
(161, 'M312-BC', 'Brown', 'undefined', 13, 101.6, 152.4, 'Black Core', '#c75900', '#000000', 1, '/public/static/images/matboards/M312-BC_Brown_5e82ab58e5688_th.jpg', '/public/static/images/matboards/M312-BC_Brown_5e82ab58e6dbe.jpg'),
(162, 'M310', 'Terracotta', 'undefined', 159, 101.6, 152.4, 'White Core', '#ab4100', '#ffffff', 1, NULL, NULL),
(163, 'M311', 'Silver Metallic', 'undefined', 55, 101.6, 81.3, 'Black Core', '#a9a9a9', '#000000', 1, '/public/static/images/matboards/M311_Silver_Metallic_5e8288a213006_th.jpg', '/public/static/images/matboards/M311_Silver_Metallic_5e8288a217a38.jpg'),
(164, 'M314', 'Relaxed Blue', 'undefined', 112, 101.6, 81.3, 'White Core', '#84aebb', '#ffffff', 1, NULL, NULL),
(165, 'M315', 'Bark', 'undefined', 103, 101.6, 81.3, 'White Core', '#675F51', '#ffffff', 1, NULL, NULL),
(166, 'M316', 'Pistachio', 'undefined', 97, 101.6, 81.3, 'White Core', '#A29962', '#ffffff', 1, NULL, NULL),
(167, 'M317-BC', 'Brown Soil', 'undefined', 12, 101.6, 81.3, 'Black Core', '#76533B', '#000000', 1, NULL, NULL),
(168, 'M318', 'Brown Clay', 'undefined', 156, 101.6, 81.3, 'White Core', '#886954', '#ffffff', 1, NULL, NULL),
(169, 'M319', 'Cream Sandy Textured', 'undefined', 86, 101.6, 81.3, 'White Core', '#F4F4DC', '#ffffff', 1, NULL, NULL),
(170, 'M146-BC', 'Mat Green', 'undefined', 50, 101.6, 81.3, 'Black Core', '#828f72', '#000000', 1, NULL, NULL),
(171, 'M147-BC', 'Shrimp Shell', 'undefined', 23, 101.6, 81.3, 'Black Core', '#ffcda3', '#000000', 1, NULL, NULL),
(172, 'M148', 'Brown', 'undefined', 157, 101.6, 152.5, 'White Core', '#92604e', '#ffffff', 1, NULL, NULL),
(173, 'M149-BC', 'Very Soft Blue', 'undefined', 42, 101.6, 81.3, 'Black Core', '#c2d6d4', '#000000', 1, NULL, NULL),
(174, 'M150', 'Dark Brown', 'undefined', 161, 101.6, 81.3, 'White Core', '#6b443f', '#ffffff', 1, NULL, NULL),
(175, 'M151', 'Milkshake', 'undefined', 75, 101.6, 81.3, 'White Core', '#f8f8f5', '#ffffff', 1, NULL, NULL),
(176, 'M152', 'Mat Blue', 'undefined', 43, 101.6, 152.4, 'Black Core', '#486c7d', '#000000', 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `matboard_category`
--

CREATE TABLE `matboard_category` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `sort_order` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `matboard_category`
--

INSERT INTO `matboard_category` (`id`, `name`, `sort_order`) VALUES
(1, 'White Core', 0),
(2, 'Black Core', 0),
(3, 'Museum', 0);

-- --------------------------------------------------------

--
-- Table structure for table `on_sale`
--

CREATE TABLE `on_sale` (
  `id` int(11) NOT NULL,
  `code` varchar(255) DEFAULT NULL,
  `width` float DEFAULT NULL,
  `depth` float DEFAULT NULL,
  `rebate` float DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `rate` int(11) DEFAULT NULL,
  `min` int(11) DEFAULT NULL,
  `max` int(11) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `material` varchar(255) DEFAULT NULL,
  `thumb_image` varchar(255) DEFAULT NULL,
  `tile_image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `on_sale`
--

INSERT INTO `on_sale` (`id`, `code`, `width`, `depth`, `rebate`, `description`, `rate`, `min`, `max`, `category`, `material`, `thumb_image`, `tile_image`) VALUES
(1118, '103Y', 2, 4, 0.7, 'Lemon Yellow', 2, 10, 160, '2-Colourful', 'Wood', '/public/static/images/frame_images/large/lrg_cross_frame_1118.jpg?v=3', '/public/static/images/frame_images/large/top_frame_1118.jpg?v=3'),
(1120, '103Z', 2, 4, 0.7, 'Apple Green', 2, 10, 150, '2-Colourful', 'Wood', '/public/static/images/frame_images/large/lrg_cross_frame_1120.jpg?v=4', '/public/static/images/frame_images/large/top_frame_1120.jpg?v=4'),
(1331, '222G', 1.3, 1.5, 0.5, 'Light Stain', 1, 10, 62, '1-Stains', 'Wood', '/public/static/images/frame_images/large/lrg_cross_frame_1331.jpg?v=2', '/public/static/images/frame_images/large/top_frame_1331.jpg?v=2'),
(1532, '103E', 2, 4, 0.5, 'Torquoise', 2, 10, 150, '2-Colourful', 'Wood', '/public/static/images/frame_images/large/lrg_cross_frame_1532.jpg?v=3', '/public/static/images/frame_images/large/top_frame_1532.jpg?v=3');

-- --------------------------------------------------------

--
-- Table structure for table `popular`
--

CREATE TABLE `popular` (
  `id` int(11) NOT NULL,
  `code` varchar(20) NOT NULL,
  `width` float NOT NULL,
  `depth` float NOT NULL,
  `rebate` float NOT NULL,
  `description` varchar(255) NOT NULL,
  `rate` int(11) NOT NULL,
  `min` int(11) NOT NULL,
  `max` int(11) NOT NULL,
  `category` varchar(255) NOT NULL,
  `material` varchar(255) NOT NULL,
  `thumb_image` varchar(255) NOT NULL,
  `tile_image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `popular`
--

INSERT INTO `popular` (`id`, `code`, `width`, `depth`, `rebate`, `description`, `rate`, `min`, `max`, `category`, `material`, `thumb_image`, `tile_image`) VALUES
(1497, '224VL', 2, 2, 0.7, 'Straw', 2, 10, 92, '9-Raw Timber', 'Wood', '/public/static/images/frame_images/large/lrg_cross_frame_1497.jpg', '/public/static/images/frame_images/large/top_frame_1497.jpg'),
(7, '103F', 2.1, 4, 0.4, 'Black', 4, 10, 180, '3-Blacks', 'Wood', '/public/static/images/frame_images/large/lrg_cross_frame_7.jpg', '/public/static/images/frame_images/large/top_frame_7.jpg'),
(11, '103H', 2.1, 4, 0.4, 'White', 4, 10, 160, '4-Whites', 'Wood', '/public/static/images/frame_images/large/lrg_cross_frame_11.jpg', '/public/static/images/frame_images/large/top_frame_11.jpg'),
(19, '232F', 3, 2, 0.6, 'Black', 3, 10, 160, '3-Blacks', 'Wood', '/public/static/images/frame_images/large/lrg_cross_frame_19.jpg', '/public/static/images/frame_images/large/top_frame_19.jpg'),
(229, '224H', 2, 2, 0.4, 'White', 1, 10, 92, '4-Whites', 'Wood', '/public/static/images/frame_images/large/lrg_cross_frame_229.jpg', '/public/static/images/frame_images/large/top_frame_229.jpg'),
(238, '224F', 2, 2, 0.5, 'Black', 1, 10, 92, '3-Blacks', 'Wood', '/public/static/images/frame_images/large/lrg_cross_frame_238.jpg?v=7', '/public/static/images/frame_images/large/top_frame_238.jpg?v=7'),
(439, '232H', 3, 2, 0.6, 'White', 3, 10, 160, '4-Whites', 'Wood', '/public/static/images/frame_images/large/lrg_cross_frame_439.jpg', '/public/static/images/frame_images/large/top_frame_439.jpg'),
(1196, '232RW', 3, 2, 0.5, 'Raw Ramin', 4, 10, 150, '9-Raw Timber', 'Wood', '/public/static/images/frame_images/large/lrg_cross_frame_1196.jpg', '/public/static/images/frame_images/large/top_frame_1196.jpg'),
(1253, '224RO', 2, 2, 0.5, 'Raw Oak', 3, 10, 92, '9-Raw Timber', 'Wood', '/public/static/images/frame_images/large/lrg_cross_frame_1253.jpg', '/public/static/images/frame_images/large/top_frame_1253.jpg'),
(1254, '232RO', 3, 2, 0.5, 'Raw Oak', 4, 10, 150, '9-Raw Timber', 'Wood', '/public/static/images/frame_images/large/lrg_cross_frame_1254.jpg', '/public/static/images/frame_images/large/top_frame_1254.jpg'),
(1255, '103RO', 2.1, 4, 0.5, 'Raw Oak', 4, 10, 150, '9-Raw Timber', 'Wood', '/public/static/images/frame_images/large/lrg_cross_frame_1255.jpg', '/public/static/images/frame_images/large/top_frame_1255.jpg'),
(1444, '232VO', 3, 2, 0.5, 'Oyster', 3, 10, 160, '4-Whites', 'Wood', '/public/static/images/frame_images/large/lrg_cross_frame_1444.jpg', '/public/static/images/frame_images/large/top_frame_1444.jpg'),
(1445, '232VH', 3, 2, 0.5, 'Soft White', 3, 10, 160, '4-Whites', 'Wood', '/public/static/images/frame_images/large/lrg_cross_frame_1445.jpg', '/public/static/images/frame_images/large/top_frame_1445.jpg'),
(1446, '232VS', 3, 2, 0.5, 'Storm', 3, 10, 160, '4-Whites', 'Wood', '/public/static/images/frame_images/large/lrg_cross_frame_1446.jpg', '/public/static/images/frame_images/large/top_frame_1446.jpg'),
(1447, '232VG', 3, 2, 0.5, 'Smoke', 3, 10, 160, '3-Blacks', 'Wood', '/public/static/images/frame_images/large/lrg_cross_frame_1447.jpg', '/public/static/images/frame_images/large/top_frame_1447.jpg'),
(1448, '232VA', 3, 2, 0.5, 'Arsenic', 3, 10, 160, '3-Blacks', 'Wood', '/public/static/images/frame_images/large/lrg_cross_frame_1448.jpg', '/public/static/images/frame_images/large/top_frame_1448.jpg'),
(1449, '103VA', 2, 4, 0.5, 'Arsenic', 4, 10, 160, '3-Blacks', 'Wood', '/public/static/images/frame_images/large/lrg_cross_frame_1449.jpg', '/public/static/images/frame_images/large/top_frame_1449.jpg'),
(1450, '103VG', 2, 4, 0.5, 'Smoke', 4, 10, 160, '3-Blacks', 'Wood', '/public/static/images/frame_images/large/lrg_cross_frame_1450.jpg', '/public/static/images/frame_images/large/top_frame_1450.jpg'),
(1451, '103VS', 2, 4, 0.5, 'Storm', 4, 10, 160, '4-Whites', 'Wood', '/public/static/images/frame_images/large/lrg_cross_frame_1451.jpg', '/public/static/images/frame_images/large/top_frame_1451.jpg'),
(1452, '103VO', 2, 4, 0.5, 'Oyster', 4, 10, 160, '4-Whites', 'Wood', '/public/static/images/frame_images/large/lrg_cross_frame_1452.jpg', '/public/static/images/frame_images/large/top_frame_1452.jpg'),
(1453, '103VH', 2, 4, 0.5, 'Soft White', 4, 10, 160, '4-Whites', 'Wood', '/public/static/images/frame_images/large/lrg_cross_frame_1453.jpg', '/public/static/images/frame_images/large/top_frame_1453.jpg'),
(1455, '232VL', 3, 2, 0.5, 'Straw', 3, 10, 160, '9-Raw Timber', 'Wood', '/public/static/images/frame_images/large/lrg_cross_frame_1455.jpg', '/public/static/images/frame_images/large/top_frame_1455.jpg'),
(1498, '224VS', 2, 2, 0.7, 'Storm', 2, 10, 92, '4-Whites', 'Wood', '/public/static/images/frame_images/large/lrg_cross_frame_1498.jpg', '/public/static/images/frame_images/large/top_frame_1498.jpg'),
(1499, '224VO', 2, 2, 0.7, 'Oyster', 2, 10, 92, '4-Whites', 'Wood', '/public/static/images/frame_images/large/lrg_cross_frame_1499.jpg', '/public/static/images/frame_images/large/top_frame_1499.jpg'),
(1500, '224VH', 2, 2, 0.7, 'Soft White', 2, 10, 92, '4-Whites', 'Wood', '/public/static/images/frame_images/large/lrg_cross_frame_1500.jpg', '/public/static/images/frame_images/large/top_frame_1500.jpg'),
(1501, '224VG', 2, 2, 0.7, 'Smoke', 2, 10, 92, '3-Blacks', 'Wood', '/public/static/images/frame_images/large/lrg_cross_frame_1501.jpg', '/public/static/images/frame_images/large/top_frame_1501.jpg'),
(1502, '224VA', 2, 2, 0.7, 'Arsenic', 2, 10, 92, '3-Blacks', 'Wood', '/public/static/images/frame_images/large/lrg_cross_frame_1502.jpg', '/public/static/images/frame_images/large/top_frame_1502.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `slips`
--

CREATE TABLE `slips` (
  `id` int(11) NOT NULL,
  `code` varchar(255) NOT NULL,
  `width` float NOT NULL,
  `depth` float NOT NULL,
  `rebate` float NOT NULL,
  `description` varchar(255) NOT NULL,
  `rate` int(11) NOT NULL,
  `min` int(11) NOT NULL,
  `max` int(11) NOT NULL,
  `category` varchar(255) NOT NULL,
  `material` varchar(255) NOT NULL,
  `thumb_image` varchar(255) NOT NULL,
  `tile_image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `slips`
--

INSERT INTO `slips` (`id`, `code`, `width`, `depth`, `rebate`, `description`, `rate`, `min`, `max`, `category`, `material`, `thumb_image`, `tile_image`) VALUES
(1082, '226H-Slip', 2, 1.5, 1.5, 'White', 2, 10, 120, 'Slips', 'Wood', '/public/static/images/frame_images/large/lrg_cross_frame_1082.jpg?v=2', '/public/static/images/frame_images/large/top_frame_1082.jpg?v=2'),
(875, '129H', 1.5, 1.5, 0.5, 'White', 4, 10, 200, 'Slips', 'Wood', '/public/static/images/frame_images/large/lrg_cross_frame_875.jpg?v=1', '/public/static/images/frame_images/large/top_frame_875.jpg?v=1'),
(876, '129F', 1.5, 1.5, 0.5, 'Black', 4, 10, 200, 'Slips', 'Wood', '/public/static/images/frame_images/large/lrg_cross_frame_876.jpg?v=1', '/public/static/images/frame_images/large/top_frame_876.jpg?v=1'),
(1083, '226F-Slip', 2, 1.5, 1.5, 'Black', 2, 10, 120, 'Slips', 'Wood', '/public/static/images/frame_images/large/lrg_cross_frame_1083.jpg?v=2', '/public/static/images/frame_images/large/top_frame_1083.jpg?v=2'),
(1155, '129C-Slip', 2.5, 2, 0.5, 'Cream', 3, 10, 120, 'Slips', 'Wood', '/public/static/images/frame_images/large/lrg_cross_frame_1155.jpg?v=1', '/public/static/images/frame_images/large/top_frame_1155.jpg?v=1'),
(1220, 'Spacer', 0.5, 0.3, 0, 'Bk,Wte,Clear', 1, 10, 200, 'Slips', 'Synthetic', '/public/static/images/frame_images/large/lrg_cross_frame_1220.jpg?v=1', '/public/static/images/frame_images/large/top_frame_1220.jpg?v=1'),
(1518, '226FO-Slip', 2, 1.2, 0.4, 'Black Grain', 2, 10, 120, 'Slips', 'Wood', '/public/static/images/frame_images/large/lrg_cross_frame_1518.jpg?v=1', '/public/static/images/frame_images/large/top_frame_1518.jpg?v=1'),
(1519, '226HO-Slip', 2, 1.2, 0.4, 'White Grain', 2, 10, 120, 'Slips', 'Wood', '/public/static/images/frame_images/large/lrg_cross_frame_1519.jpg?v=1', '/public/static/images/frame_images/large/top_frame_1519.jpg?v=1');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `mobile` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `frames`
--
ALTER TABLE `frames`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `matboards`
--
ALTER TABLE `matboards`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `on_sale`
--
ALTER TABLE `on_sale`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
