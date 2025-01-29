-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 09, 2025 at 09:31 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ceilingfans`
--

-- --------------------------------------------------------

--
-- Table structure for table `fans`
--

CREATE TABLE `fans` (
  `id` int(11) NOT NULL,
  `Company` varchar(100) DEFAULT NULL,
  `Model` varchar(100) DEFAULT NULL,
  `Size` varchar(50) DEFAULT NULL,
  `WaterProof` tinyint(1) DEFAULT NULL,
  `Shape` varchar(50) DEFAULT NULL,
  `Price` decimal(10,2) DEFAULT NULL,
  `Color` varchar(50) DEFAULT NULL,
  `WarrantyStart` date DEFAULT NULL,
  `WarrantyEnd` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fans`
--

INSERT INTO `fans` (`id`, `Company`, `Model`, `Size`, `WaterProof`, `Shape`, `Price`, `Color`, `WarrantyStart`, `WarrantyEnd`) VALUES
(1, 'CompanyA', 'ModelX1', '48 inches', 1, 'Round', 59.99, 'White', '2024-01-01', '2026-01-01'),
(2, 'CompanyB', 'ModelY2', '52 inches', 0, 'Square', 79.99, 'Black', '2024-02-01', '2026-02-01'),
(3, 'CompanyC', 'ModelZ3', '42 inches', 1, 'Round', 69.99, 'Grey', '2024-03-01', '2026-03-01'),
(4, 'CompanyD', 'ModelW4', '54 inches', 0, 'Rectangular', 89.99, 'Blue', '2024-04-01', '2026-04-01'),
(5, 'CompanyE', 'ModelV5', '50 inches', 1, 'Round', 99.99, 'Green', '2024-05-01', '2026-05-01'),
(6, 'CompanyF', 'ModelU6', '56 inches', 0, 'Square', 109.99, 'Red', '2024-06-01', '2026-06-01'),
(7, 'CompanyG', 'ModelT7', '46 inches', 1, 'Round', 119.99, 'Yellow', '2024-07-01', '2026-07-01'),
(8, 'CompanyH', 'ModelS8', '44 inches', 0, 'Oval', 129.99, 'Brown', '2024-08-01', '2026-08-01'),
(9, 'CompanyI', 'ModelR9', '60 inches', 1, 'Hexagonal', 139.99, 'Silver', '2024-09-01', '2026-09-01'),
(10, 'CompanyJ', 'ModelQ10', '62 inches', 1, 'Round', 149.99, 'Gold', '2024-09-29', '2026-09-29');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fans`
--
ALTER TABLE `fans`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fans`
--
ALTER TABLE `fans`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
