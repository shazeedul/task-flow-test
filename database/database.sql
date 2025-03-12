-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 09, 2024 at 06:44 AM
-- Server version: 10.6.16-MariaDB-0ubuntu0.22.04.1
-- PHP Version: 8.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bdtask_vms_laravel`
--

-- --------------------------------------------------------

--
-- Table structure for table `cache`
--

CREATE TABLE `cache` (
  `key` varchar(120) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(120) NOT NULL,
  `owner` varchar(120) NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `departments`
--

CREATE TABLE `departments` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(120) NOT NULL,
  `parent_id` bigint(20) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `document_types`
--

CREATE TABLE `document_types` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(120) NOT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `drivers`
--

CREATE TABLE `drivers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(120) NOT NULL,
  `driver_code` varchar(120) DEFAULT NULL,
  `phone` varchar(120) DEFAULT NULL,
  `license_type_id` bigint(20) UNSIGNED NOT NULL,
  `license_num` varchar(120) DEFAULT NULL,
  `license_issue_date` date DEFAULT NULL,
  `nid` varchar(120) DEFAULT NULL,
  `license_expiry_date` date DEFAULT NULL,
  `authorization_code` varchar(120) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `joining_date` date DEFAULT NULL,
  `working_time_slot` varchar(120) DEFAULT NULL,
  `leave_status` tinyint(1) NOT NULL DEFAULT 0,
  `present_address` text DEFAULT NULL,
  `permanent_address` text DEFAULT NULL,
  `avatar_path` varchar(120) DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `driver_performances`
--

CREATE TABLE `driver_performances` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `driver_id` bigint(20) UNSIGNED NOT NULL,
  `over_time_status` tinyint(1) NOT NULL DEFAULT 0,
  `salary_status` tinyint(1) NOT NULL DEFAULT 0,
  `ot_payment` double(8,2) DEFAULT NULL,
  `performance_bonus` double(8,2) DEFAULT NULL,
  `penalty_amount` double(8,2) DEFAULT NULL,
  `penalty_reason` varchar(120) DEFAULT NULL,
  `penalty_date` date DEFAULT NULL,
  `insert_date` date DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `employees`
--

CREATE TABLE `employees` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `employee_code` varchar(120) DEFAULT NULL,
  `name` varchar(120) NOT NULL,
  `payroll_type` varchar(120) DEFAULT NULL,
  `department_id` bigint(20) UNSIGNED DEFAULT NULL,
  `position_id` bigint(20) UNSIGNED DEFAULT NULL,
  `nid` varchar(120) DEFAULT NULL,
  `phone` varchar(120) DEFAULT NULL,
  `email` varchar(120) DEFAULT NULL,
  `email2` varchar(120) DEFAULT NULL,
  `phone2` varchar(120) DEFAULT NULL,
  `join_date` date DEFAULT NULL,
  `blood_group` varchar(120) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `working_slot_from` varchar(120) DEFAULT NULL,
  `working_slot_to` varchar(120) DEFAULT NULL,
  `father_name` varchar(120) DEFAULT NULL,
  `mother_name` varchar(120) DEFAULT NULL,
  `present_contact` varchar(120) DEFAULT NULL,
  `present_address` varchar(120) DEFAULT NULL,
  `permanent_contact` varchar(120) DEFAULT NULL,
  `permanent_address` varchar(120) DEFAULT NULL,
  `present_city` varchar(120) DEFAULT NULL,
  `permanent_city` varchar(120) DEFAULT NULL,
  `contact_person_name` varchar(120) DEFAULT NULL,
  `contact_person_mobile` varchar(120) DEFAULT NULL,
  `reference_name` varchar(120) DEFAULT NULL,
  `reference_mobile` varchar(120) DEFAULT NULL,
  `reference_email` varchar(120) DEFAULT NULL,
  `reference_address` varchar(120) DEFAULT NULL,
  `avatar_path` varchar(120) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `expenses`
--

CREATE TABLE `expenses` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `code` varchar(120) NOT NULL,
  `type` enum('fuel','maintenance','others') NOT NULL DEFAULT 'others' COMMENT 'fuel, maintenance, others',
  `employee_id` bigint(20) UNSIGNED DEFAULT NULL,
  `vendor_id` bigint(20) UNSIGNED DEFAULT NULL,
  `vehicle_id` bigint(20) UNSIGNED NOT NULL,
  `trip_type_id` bigint(20) UNSIGNED DEFAULT NULL,
  `trip_number` varchar(120) DEFAULT NULL,
  `odometer_millage` varchar(120) DEFAULT NULL,
  `vehicle_rent` decimal(15,2) DEFAULT NULL,
  `total` decimal(15,2) DEFAULT NULL,
  `date` date NOT NULL,
  `remarks` text DEFAULT NULL,
  `status` enum('pending','approved','rejected') NOT NULL DEFAULT 'pending' COMMENT 'pending, approved, rejected',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `expense_details`
--

CREATE TABLE `expense_details` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `expense_id` bigint(20) UNSIGNED DEFAULT NULL,
  `type_id` bigint(20) UNSIGNED DEFAULT NULL,
  `qty` int(11) NOT NULL DEFAULT 0,
  `price` decimal(15,2) NOT NULL DEFAULT 0.00,
  `total` decimal(15,2) NOT NULL DEFAULT 0.00,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `expense_types`
--

CREATE TABLE `expense_types` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(120) NOT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(120) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `fuel_requisitions`
--

CREATE TABLE `fuel_requisitions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `code` varchar(120) NOT NULL,
  `vehicle_id` bigint(20) UNSIGNED DEFAULT NULL,
  `station_id` bigint(20) UNSIGNED DEFAULT NULL,
  `type_id` bigint(20) UNSIGNED DEFAULT NULL,
  `qty` decimal(15,2) NOT NULL DEFAULT 0.00,
  `current_qty` decimal(15,2) NOT NULL DEFAULT 0.00,
  `date` date NOT NULL DEFAULT '2024-05-09',
  `status` enum('pending','approved','rejected') NOT NULL DEFAULT 'pending' COMMENT 'pending, approved, rejected',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `fuel_stations`
--

CREATE TABLE `fuel_stations` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `vendor_id` bigint(20) UNSIGNED DEFAULT NULL,
  `code` varchar(120) NOT NULL,
  `name` varchar(120) NOT NULL,
  `contact_person` varchar(120) DEFAULT NULL,
  `contact_number` varchar(120) DEFAULT NULL,
  `address` varchar(120) DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `fuel_types`
--

CREATE TABLE `fuel_types` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(120) NOT NULL,
  `description` text DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `insurances`
--

CREATE TABLE `insurances` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `company_id` bigint(20) UNSIGNED NOT NULL,
  `vehicle_id` bigint(20) UNSIGNED DEFAULT NULL,
  `policy_number` varchar(120) DEFAULT NULL,
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  `charge_payable` double DEFAULT NULL,
  `deductible` double DEFAULT NULL,
  `recurring_date` date DEFAULT NULL,
  `recurring_period_id` bigint(20) UNSIGNED DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 0,
  `add_reminder` tinyint(1) NOT NULL DEFAULT 0,
  `remarks` longtext DEFAULT NULL,
  `policy_document_path` varchar(120) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `inventory_categories`
--

CREATE TABLE `inventory_categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(120) NOT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `inventory_expense_types`
--

CREATE TABLE `inventory_expense_types` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(120) NOT NULL,
  `category` enum('Fuel','Maintenance','Other') NOT NULL DEFAULT 'Other' COMMENT 'Fuel, Maintenance, Other',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `inventory_locations`
--

CREATE TABLE `inventory_locations` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(120) NOT NULL,
  `room` int(11) NOT NULL DEFAULT 0,
  `self` int(11) NOT NULL DEFAULT 0,
  `drawer` int(11) NOT NULL DEFAULT 0,
  `capacity` int(11) NOT NULL DEFAULT 0,
  `dimension` int(11) NOT NULL DEFAULT 0,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `inventory_parts`
--

CREATE TABLE `inventory_parts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `category_id` bigint(20) UNSIGNED DEFAULT NULL,
  `location_id` bigint(20) UNSIGNED DEFAULT NULL,
  `name` varchar(120) NOT NULL,
  `description` text DEFAULT NULL,
  `qty` int(11) NOT NULL DEFAULT 0,
  `remarks` text DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `inventory_parts_usages`
--

CREATE TABLE `inventory_parts_usages` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_by` bigint(20) UNSIGNED NOT NULL,
  `code` varchar(120) NOT NULL,
  `vehicle_id` bigint(20) UNSIGNED DEFAULT NULL,
  `date` date NOT NULL DEFAULT '2024-05-09',
  `remarks` text DEFAULT NULL,
  `status` enum('pending','approved','rejected') NOT NULL DEFAULT 'pending',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `inventory_parts_usage_details`
--

CREATE TABLE `inventory_parts_usage_details` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `parts_usage_id` bigint(20) UNSIGNED NOT NULL,
  `category_id` bigint(20) UNSIGNED DEFAULT NULL,
  `parts_id` bigint(20) UNSIGNED DEFAULT NULL,
  `qty` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(120) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `languages`
--

CREATE TABLE `languages` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(120) NOT NULL,
  `code` varchar(120) NOT NULL,
  `flag_path` varchar(120) DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 1 COMMENT '0=Inactive , 1=Active',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `languages`
--

INSERT INTO `languages` (`id`, `title`, `code`, `flag_path`, `status`, `created_at`, `updated_at`) VALUES
(1, 'English', 'en', NULL, 1, '2024-05-09 00:43:45', '2024-05-09 00:43:45'),
(2, 'Bangla', 'bn', NULL, 1, '2024-05-09 00:43:45', '2024-05-09 00:43:45');

-- --------------------------------------------------------

--
-- Table structure for table `legal_documentations`
--

CREATE TABLE `legal_documentations` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `document_type_id` bigint(20) UNSIGNED NOT NULL,
  `vehicle_id` bigint(20) UNSIGNED DEFAULT NULL,
  `issue_date` date DEFAULT NULL,
  `expiry_date` date DEFAULT NULL,
  `charge_paid` double DEFAULT NULL,
  `vendor_id` bigint(20) UNSIGNED DEFAULT NULL,
  `commission` double DEFAULT NULL,
  `notify_before` bigint(20) UNSIGNED DEFAULT NULL,
  `email` varchar(120) DEFAULT NULL,
  `document_file_path` varchar(120) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `license_types`
--

CREATE TABLE `license_types` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(120) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(120) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_03_01_042503_create_cache_table', 1),
(2, '2014_10_12_000000_create_users_table', 1),
(3, '2014_10_12_100000_create_password_resets_table', 1),
(4, '2014_10_12_200000_add_two_factor_columns_to_users_table', 1),
(5, '2019_08_19_000000_create_failed_jobs_table', 1),
(6, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(7, '2021_12_25_124522_create_settings_table', 1),
(8, '2022_05_25_072926_create_languages_table', 1),
(9, '2023_02_09_051208_create_permission_tables', 1),
(10, '2023_02_12_070616_create_sessions_table', 1),
(11, '2023_02_28_082321_add_group_column_in_permissions_table', 1),
(12, '2024_02_22_062559_create_jobs_table', 1),
(13, '2024_04_16_101146_create_positions_table', 1),
(14, '2024_04_16_102152_create_inventory_categories_table', 1),
(15, '2024_04_16_104738_create_departments_table', 1),
(16, '2024_04_16_104738_create_license_types_table', 1),
(17, '2024_04_16_105119_create_employees_table', 1),
(18, '2024_04_16_105126_create_drivers_table', 1),
(19, '2024_04_16_114627_create_driver_performances_table', 1),
(20, '2024_04_18_050522_create_inventory_locations_table', 1),
(21, '2024_04_18_052536_create_inventory_parts_table', 1),
(22, '2024_04_18_103918_create_inventory_expense_types_table', 1),
(23, '2024_04_20_044252_create_vendors_table', 1),
(24, '2024_04_20_044554_create_vehicle_divisions_table', 1),
(25, '2024_04_20_044554_create_vehicle_types_table', 1),
(26, '2024_04_20_044745_create_vehicle_requisition_purposes_table', 1),
(27, '2024_04_20_044803_create_vehicle_requisition_types_table', 1),
(28, '2024_04_20_045000_create_vehicle_maintenance_types_table', 1),
(29, '2024_04_20_045421_create_fuel_types_table', 1),
(30, '2024_04_20_045551_create_rta_offices_table', 1),
(31, '2024_04_20_052012_create_vehicle_ownership_types_table', 1),
(32, '2024_04_20_074618_create_vehicle_insurance_companies_table', 1),
(33, '2024_04_20_074719_create_vehicle_insurance_recurring_periods_table', 1),
(34, '2024_04_20_102713_create_fuel_stations_table', 1),
(35, '2024_04_21_055205_create_vehicle_requisitions_table', 1),
(36, '2024_04_21_115406_create_vehicle_route_details_table', 1),
(37, '2024_04_22_040333_create_purchases_table', 1),
(38, '2024_04_22_040348_create_purchase_details_table', 1),
(39, '2024_04_22_043120_create_vehicles_table', 1),
(40, '2024_04_22_043430_create_document_types_table', 1),
(41, '2024_04_22_062648_create_inventory_parts_usages_table', 1),
(42, '2024_04_22_062738_create_inventory_parts_usage_details_table', 1),
(43, '2024_04_22_091455_create_insurances_table', 1),
(44, '2024_04_23_041753_create_vehicle_refuelings_table', 1),
(45, '2024_04_23_043036_create_legal_documentations_table', 1),
(46, '2024_04_24_060501_create_pickup_and_drops_table', 1),
(47, '2024_04_24_060655_create_trip_types_table', 1),
(48, '2024_04_24_062120_create_vehicle_maintenances_table', 1),
(49, '2024_04_24_062139_create_vehicle_maintenance_details_table', 1),
(50, '2024_04_25_051927_create_expense_types_table', 1),
(51, '2024_04_25_055920_create_expenses_table', 1),
(52, '2024_04_27_054436_create_expense_details_table', 1),
(53, '2024_04_27_102814_create_fuel_requisitions_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `model_has_permissions`
--

CREATE TABLE `model_has_permissions` (
  `permission_id` bigint(20) UNSIGNED NOT NULL,
  `model_type` varchar(120) NOT NULL,
  `model_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `model_has_roles`
--

CREATE TABLE `model_has_roles` (
  `role_id` bigint(20) UNSIGNED NOT NULL,
  `model_type` varchar(120) NOT NULL,
  `model_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(120) NOT NULL,
  `token` varchar(120) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `permissions`
--

CREATE TABLE `permissions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(120) NOT NULL,
  `group` varchar(120) NOT NULL DEFAULT 'General',
  `guard_name` varchar(120) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `permissions`
--

INSERT INTO `permissions` (`id`, `name`, `group`, `guard_name`, `created_at`, `updated_at`) VALUES
(1, 'employee_management', 'Employee', 'web', '2024-05-09 00:43:45', '2024-05-09 00:43:45'),
(2, 'vehicle_management', 'Vehicle Management', 'web', '2024-05-09 00:43:45', '2024-05-09 00:43:45'),
(3, 'vehicle_type_management', 'Vehicle Management', 'web', '2024-05-09 00:43:45', '2024-05-09 00:43:45'),
(4, 'vehicle_division_management', 'Vehicle Management', 'web', '2024-05-09 00:43:45', '2024-05-09 00:43:45'),
(5, 'vehicle_rta_office_management', 'Vehicle Management', 'web', '2024-05-09 00:43:45', '2024-05-09 00:43:45'),
(6, 'vehicle_ownership_type_management', 'Vehicle Management', 'web', '2024-05-09 00:43:45', '2024-05-09 00:43:45'),
(7, 'document_type_management', 'Vehicle Management', 'web', '2024-05-09 00:43:45', '2024-05-09 00:43:45'),
(8, 'legal_document_management', 'Vehicle Management', 'web', '2024-05-09 00:43:45', '2024-05-09 00:43:45'),
(9, 'vehicle_requisition_type_management', 'Vehicle Requisition', 'web', '2024-05-09 00:43:45', '2024-05-09 00:43:45'),
(10, 'vehicle_requisition_management', 'Vehicle Requisition', 'web', '2024-05-09 00:43:45', '2024-05-09 00:43:45'),
(11, 'vehicle_requisition_purpose_management', 'Vehicle Requisition', 'web', '2024-05-09 00:43:45', '2024-05-09 00:43:45'),
(12, 'vehicle_route_management', 'Vehicle Requisition', 'web', '2024-05-09 00:43:45', '2024-05-09 00:43:45'),
(13, 'pick_drop_requisition', 'Vehicle Requisition', 'web', '2024-05-09 00:43:45', '2024-05-09 00:43:45'),
(14, 'vehicle_insurance_company_management', 'Vehicle Insurance', 'web', '2024-05-09 00:43:45', '2024-05-09 00:43:45'),
(15, 'vehicle_insurance_recurring_period_management', 'Vehicle Insurance', 'web', '2024-05-09 00:43:45', '2024-05-09 00:43:45'),
(16, 'insurance_management', 'Vehicle Insurance', 'web', '2024-05-09 00:43:45', '2024-05-09 00:43:45'),
(17, 'fuel_type_management', 'Refueling', 'web', '2024-05-09 00:43:45', '2024-05-09 00:43:45'),
(18, 'fuel_station_management', 'Refueling', 'web', '2024-05-09 00:43:45', '2024-05-09 00:43:45'),
(19, 'refueling_management', 'Refueling', 'web', '2024-05-09 00:43:45', '2024-05-09 00:43:45'),
(20, 'refueling_requisition_management', 'Refueling', 'web', '2024-05-09 00:43:45', '2024-05-09 00:43:45'),
(21, 'inventory_category_management', 'Inventory', 'web', '2024-05-09 00:43:45', '2024-05-09 00:43:45'),
(22, 'inventory_location_management', 'Inventory', 'web', '2024-05-09 00:43:45', '2024-05-09 00:43:45'),
(23, 'inventory_parts_management', 'Inventory', 'web', '2024-05-09 00:43:45', '2024-05-09 00:43:45'),
(24, 'inventory_parts_usage_management', 'Inventory', 'web', '2024-05-09 00:43:45', '2024-05-09 00:43:45'),
(25, 'inventory_vendor_management', 'Inventory', 'web', '2024-05-09 00:43:45', '2024-05-09 00:43:45'),
(26, 'expense_management', 'Inventory', 'web', '2024-05-09 00:43:45', '2024-05-09 00:43:45'),
(27, 'expense_type_management', 'Inventory', 'web', '2024-05-09 00:43:45', '2024-05-09 00:43:45'),
(28, 'trip_type_management', 'Inventory', 'web', '2024-05-09 00:43:45', '2024-05-09 00:43:45'),
(29, 'inventory_stock_management', 'Inventory', 'web', '2024-05-09 00:43:45', '2024-05-09 00:43:45'),
(30, 'vehicle_maintenance_management', 'Vehicle Maintenance', 'web', '2024-05-09 00:43:45', '2024-05-09 00:43:45'),
(31, 'vehicle_maintenance_type_management', 'Vehicle Maintenance', 'web', '2024-05-09 00:43:45', '2024-05-09 00:43:45'),
(32, 'purchase_management', 'Purchase', 'web', '2024-05-09 00:43:45', '2024-05-09 00:43:45'),
(33, 'report_management', 'Report', 'web', '2024-05-09 00:43:45', '2024-05-09 00:43:45'),
(34, 'employee_report', 'Report', 'web', '2024-05-09 00:43:45', '2024-05-09 00:43:45'),
(35, 'driver_report', 'Report', 'web', '2024-05-09 00:43:45', '2024-05-09 00:43:45'),
(36, 'vehicle_report', 'Report', 'web', '2024-05-09 00:43:45', '2024-05-09 00:43:45'),
(37, 'vehicle_requisition_report', 'Report', 'web', '2024-05-09 00:43:45', '2024-05-09 00:43:45'),
(38, 'pickdrop_requisition_report', 'Report', 'web', '2024-05-09 00:43:45', '2024-05-09 00:43:45'),
(39, 'refuel_requisition_report', 'Report', 'web', '2024-05-09 00:43:45', '2024-05-09 00:43:45'),
(40, 'purchase_report', 'Report', 'web', '2024-05-09 00:43:45', '2024-05-09 00:43:45'),
(41, 'expense_report', 'Report', 'web', '2024-05-09 00:43:45', '2024-05-09 00:43:45'),
(42, 'maintenance_report', 'Report', 'web', '2024-05-09 00:43:45', '2024-05-09 00:43:45'),
(43, 'user_management', 'User', 'web', '2024-05-09 00:43:45', '2024-05-09 00:43:45'),
(44, 'role_management', 'User', 'web', '2024-05-09 00:43:45', '2024-05-09 00:43:45'),
(45, 'permission_management', 'User', 'web', '2024-05-09 00:43:45', '2024-05-09 00:43:45'),
(46, 'setting_management', 'Setting', 'web', '2024-05-09 00:43:45', '2024-05-09 00:43:45'),
(47, 'mail_setting_management', 'Setting', 'web', '2024-05-09 00:43:45', '2024-05-09 00:43:45'),
(48, 'env_setting_management', 'Setting', 'web', '2024-05-09 00:43:45', '2024-05-09 00:43:45'),
(49, 'language_setting_management', 'Setting', 'web', '2024-05-09 00:43:45', '2024-05-09 00:43:45');

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(120) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(120) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pickup_and_drops`
--

CREATE TABLE `pickup_and_drops` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `route_id` bigint(20) UNSIGNED NOT NULL,
  `start_point` varchar(120) DEFAULT NULL,
  `end_point` varchar(120) DEFAULT NULL,
  `employee_id` bigint(20) UNSIGNED DEFAULT NULL,
  `request_type` tinyint(1) NOT NULL DEFAULT 0 COMMENT '0=Regular, 1=Specific day',
  `type` enum('Pickup','Drop','PickDrop') DEFAULT NULL,
  `effective_date` date DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 0 COMMENT '0=Pending, 1=Release',
  `is_approved` enum('Pending','Rejected','Approved') NOT NULL DEFAULT 'Pending',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `positions`
--

CREATE TABLE `positions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(120) NOT NULL,
  `description` longtext DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `purchases`
--

CREATE TABLE `purchases` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `code` varchar(120) NOT NULL,
  `vendor_id` bigint(20) UNSIGNED DEFAULT NULL,
  `date` date NOT NULL DEFAULT '2024-05-09',
  `total` decimal(15,2) NOT NULL DEFAULT 0.00,
  `status` enum('pending','approved','rejected') NOT NULL DEFAULT 'pending' COMMENT 'pending, approved, rejected',
  `req_img_path` varchar(120) DEFAULT NULL,
  `order_path` varchar(120) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `purchase_details`
--

CREATE TABLE `purchase_details` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `purchase_id` bigint(20) UNSIGNED NOT NULL,
  `category_id` bigint(20) UNSIGNED NOT NULL,
  `parts_id` bigint(20) UNSIGNED NOT NULL,
  `qty` int(11) NOT NULL DEFAULT 0,
  `price` decimal(15,2) NOT NULL DEFAULT 0.00,
  `total` decimal(15,2) NOT NULL DEFAULT 0.00,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(120) NOT NULL,
  `guard_name` varchar(120) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `guard_name`, `created_at`, `updated_at`) VALUES
(1, 'Administrator', 'web', '2024-05-09 00:43:45', '2024-05-09 00:43:45'),
(2, 'User', 'web', '2024-05-09 00:43:45', '2024-05-09 00:43:45');

-- --------------------------------------------------------

--
-- Table structure for table `role_has_permissions`
--

CREATE TABLE `role_has_permissions` (
  `permission_id` bigint(20) UNSIGNED NOT NULL,
  `role_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `role_has_permissions`
--

INSERT INTO `role_has_permissions` (`permission_id`, `role_id`) VALUES
(1, 1),
(2, 1),
(3, 1),
(4, 1),
(5, 1),
(6, 1),
(7, 1),
(8, 1),
(9, 1),
(10, 1),
(11, 1),
(12, 1),
(13, 1),
(14, 1),
(15, 1),
(16, 1),
(17, 1),
(18, 1),
(19, 1),
(20, 1),
(21, 1),
(22, 1),
(23, 1),
(24, 1),
(25, 1),
(26, 1),
(27, 1),
(28, 1),
(29, 1),
(30, 1),
(31, 1),
(32, 1),
(33, 1),
(34, 1),
(35, 1),
(36, 1),
(37, 1),
(38, 1),
(39, 1),
(40, 1),
(41, 1),
(42, 1),
(43, 1),
(44, 1),
(45, 1),
(46, 1),
(47, 1),
(48, 1),
(49, 1);

-- --------------------------------------------------------

--
-- Table structure for table `rta_offices`
--

CREATE TABLE `rta_offices` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(120) NOT NULL,
  `description` varchar(120) DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(120) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `settings`
--

CREATE TABLE `settings` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `group` varchar(120) NOT NULL,
  `key` varchar(120) NOT NULL,
  `display_name` varchar(120) NOT NULL,
  `value` text DEFAULT NULL,
  `type` varchar(120) NOT NULL,
  `details` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`details`)),
  `note` text DEFAULT NULL,
  `order` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `settings`
--

INSERT INTO `settings` (`id`, `group`, `key`, `display_name`, `value`, `type`, `details`, `note`, `order`, `created_at`, `updated_at`) VALUES
(1, 'Site', 'site.name', 'Name', 'Bdtask', 'text', NULL, NULL, 1, '2023-03-21 06:00:12', '2023-03-21 06:00:12'),
(2, 'Site', 'site.description', 'Description', 'Want to study abroad ? Get free expert advice and information on colleges, courses, exams, admission, student visa, and application process to study overseas.', 'text_area', NULL, NULL, 2, '2023-03-21 06:00:12', '2023-03-21 06:00:12'),
(3, 'Site', 'site.url', 'Site Url', 'https://www.bdtask.com', 'text', NULL, NULL, 3, '2023-03-21 06:00:12', '2023-03-21 06:00:12'),
(4, 'Site', 'site.logo_light', 'Logo White', NULL, 'image', NULL, 'Default image size 205x60', 4, '2023-03-21 06:00:12', '2023-03-21 06:00:12'),
(5, 'Site', 'site.logo_black', 'Logo Black', NULL, 'image', NULL, 'Default image size 205x60', 4, '2023-03-21 06:00:12', '2023-03-21 06:00:12'),
(6, 'Site', 'site.favicon', 'Favicon', NULL, 'image', NULL, 'Default image size 68x68', 8, '2023-03-21 06:00:12', '2023-03-21 06:00:12'),
(7, 'Vendor', 'vendor.code_prefix', 'Code Prefix', 'VEN-', 'text', NULL, NULL, 1, '2023-03-21 06:00:12', '2023-03-21 06:00:12'),
(8, 'Fuel', 'fuel.station_code_prefix', 'Station Code Prefix', 'FSC-', 'text', NULL, NULL, 1, '2023-03-21 06:00:12', '2023-03-21 06:00:12'),
(9, 'Maintenance', 'maintenance.code_prefix', 'Maintenance Code Prefix', 'MCP-', 'text', NULL, NULL, 1, '2023-03-21 06:00:12', '2023-03-21 06:00:12'),
(10, 'Inventory', 'inventory.parts_code_prefix', 'Parts Code Prefix', 'IPCP-', 'text', NULL, NULL, 1, '2023-03-21 06:00:12', '2023-03-21 06:00:12'),
(11, 'Purchase', 'purchase.code_prefix', 'Purchase Code Prefix', 'PCP-', 'text', NULL, NULL, 1, '2023-03-21 06:00:12', '2023-03-21 06:00:12'),
(12, 'Fuel', 'fuel.requisition_code_prefix', 'Requisition Code Prefix', 'FRSC-', 'text', NULL, NULL, 2, '2023-03-21 06:00:12', '2023-03-21 06:00:12'),
(13, 'Site', 'site.auth_banner', 'Auth Banner', NULL, 'image', NULL, NULL, 8, '2023-03-21 06:00:12', '2023-03-21 06:00:12');

-- --------------------------------------------------------

--
-- Table structure for table `trip_types`
--

CREATE TABLE `trip_types` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(120) NOT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(120) NOT NULL,
  `email` varchar(120) NOT NULL,
  `phone` varchar(120) DEFAULT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(120) NOT NULL,
  `two_factor_secret` text DEFAULT NULL,
  `two_factor_recovery_codes` text DEFAULT NULL,
  `two_factor_confirmed_at` timestamp NULL DEFAULT NULL,
  `gender` varchar(120) NOT NULL DEFAULT 'Others' COMMENT 'Male,Female,Others',
  `age` varchar(120) DEFAULT NULL,
  `address` varchar(120) DEFAULT NULL,
  `status` varchar(120) NOT NULL DEFAULT 'Pending' COMMENT 'Pending, Active, Suspended',
  `profile_photo_path` varchar(2048) DEFAULT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `vehicles`
--

CREATE TABLE `vehicles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(120) NOT NULL,
  `department_id` bigint(20) UNSIGNED DEFAULT NULL,
  `registration_date` varchar(120) DEFAULT NULL,
  `license_plate` varchar(120) DEFAULT NULL,
  `alert_cell_no` varchar(120) DEFAULT NULL,
  `alert_email` varchar(120) DEFAULT NULL,
  `ownership_id` bigint(20) UNSIGNED DEFAULT NULL,
  `vehicle_type_id` bigint(20) UNSIGNED DEFAULT NULL,
  `vehicle_division_id` bigint(20) UNSIGNED DEFAULT NULL,
  `rta_circle_office_id` bigint(20) UNSIGNED DEFAULT NULL,
  `driver_id` bigint(20) UNSIGNED DEFAULT NULL,
  `vendor_id` bigint(20) UNSIGNED DEFAULT NULL,
  `seat_capacity` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `vehicle_divisions`
--

CREATE TABLE `vehicle_divisions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(120) NOT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `vehicle_insurance_companies`
--

CREATE TABLE `vehicle_insurance_companies` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(120) NOT NULL,
  `description` text DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `vehicle_insurance_recurring_periods`
--

CREATE TABLE `vehicle_insurance_recurring_periods` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(120) NOT NULL,
  `description` varchar(120) DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `vehicle_maintenances`
--

CREATE TABLE `vehicle_maintenances` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `code` varchar(120) NOT NULL,
  `employee_id` bigint(20) UNSIGNED DEFAULT NULL,
  `vehicle_id` bigint(20) UNSIGNED DEFAULT NULL,
  `maintenance_type_id` bigint(20) UNSIGNED DEFAULT NULL,
  `title` varchar(120) DEFAULT NULL,
  `date` date NOT NULL DEFAULT '2024-05-09',
  `remarks` text DEFAULT NULL,
  `charge_bear_by` varchar(120) DEFAULT NULL,
  `charge` decimal(15,2) NOT NULL DEFAULT 0.00,
  `total` decimal(15,2) NOT NULL DEFAULT 0.00,
  `type` enum('maintenance','general') NOT NULL DEFAULT 'general' COMMENT 'maintenance, general',
  `priority` enum('low','medium','high') NOT NULL DEFAULT 'low' COMMENT 'low, medium, high',
  `status` enum('pending','approved','rejected') NOT NULL DEFAULT 'pending' COMMENT 'pending, approved, rejected',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `vehicle_maintenance_details`
--

CREATE TABLE `vehicle_maintenance_details` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `maintenance_id` bigint(20) UNSIGNED NOT NULL,
  `category_id` bigint(20) UNSIGNED NOT NULL,
  `parts_id` bigint(20) UNSIGNED NOT NULL,
  `qty` int(11) NOT NULL DEFAULT 0,
  `price` decimal(15,2) NOT NULL DEFAULT 0.00,
  `total` decimal(15,2) NOT NULL DEFAULT 0.00,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `vehicle_maintenance_types`
--

CREATE TABLE `vehicle_maintenance_types` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(120) NOT NULL,
  `description` varchar(120) DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `vehicle_ownership_types`
--

CREATE TABLE `vehicle_ownership_types` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(120) NOT NULL,
  `description` text DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `vehicle_refuelings`
--

CREATE TABLE `vehicle_refuelings` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `vehicle_id` bigint(20) UNSIGNED DEFAULT NULL,
  `driver_id` bigint(20) UNSIGNED DEFAULT NULL,
  `fuel_type_id` bigint(20) UNSIGNED DEFAULT NULL,
  `fuel_station_id` bigint(20) UNSIGNED DEFAULT NULL,
  `refueled_at` timestamp NULL DEFAULT '2024-05-09 00:43:45',
  `place` varchar(120) DEFAULT NULL,
  `budget` decimal(15,2) NOT NULL DEFAULT 0.00,
  `km_per_unit` decimal(15,2) NOT NULL DEFAULT 0.00,
  `last_reading` decimal(15,2) NOT NULL DEFAULT 0.00,
  `last_unit` decimal(15,2) NOT NULL DEFAULT 0.00,
  `refuel_limit` decimal(15,2) DEFAULT NULL,
  `max_unit` decimal(15,2) NOT NULL DEFAULT 0.00,
  `unit_taken` decimal(15,2) NOT NULL DEFAULT 0.00,
  `odometer_day_end` varchar(120) DEFAULT NULL,
  `odometer_refuel_time` varchar(120) DEFAULT NULL,
  `consumption_percent` decimal(8,2) DEFAULT NULL,
  `slip_path` varchar(120) DEFAULT NULL,
  `strict_policy` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `vehicle_requisitions`
--

CREATE TABLE `vehicle_requisitions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `employee_id` bigint(20) UNSIGNED NOT NULL,
  `vehicle_type_id` bigint(20) UNSIGNED DEFAULT NULL,
  `where_from` varchar(120) DEFAULT NULL,
  `where_to` varchar(120) DEFAULT NULL,
  `pickup` varchar(120) DEFAULT NULL,
  `requisition_date` date DEFAULT NULL,
  `time_from` time DEFAULT NULL,
  `time_to` time DEFAULT NULL,
  `tolerance` varchar(120) DEFAULT NULL,
  `number_of_passenger` int(11) DEFAULT NULL,
  `driver_id` bigint(20) UNSIGNED DEFAULT NULL,
  `purpose` varchar(120) DEFAULT NULL,
  `details` text DEFAULT NULL,
  `status` enum('pending','approved','rejected') NOT NULL DEFAULT 'pending' COMMENT 'pending, approved, rejected',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `vehicle_requisition_purposes`
--

CREATE TABLE `vehicle_requisition_purposes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(120) NOT NULL,
  `description` text DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `vehicle_requisition_types`
--

CREATE TABLE `vehicle_requisition_types` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(120) NOT NULL,
  `description` text DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `vehicle_route_details`
--

CREATE TABLE `vehicle_route_details` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `route_name` varchar(120) NOT NULL,
  `starting_point` varchar(120) DEFAULT NULL,
  `destination_point` varchar(120) DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 0,
  `create_pick_drop_point` tinyint(1) NOT NULL DEFAULT 0,
  `description` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `vehicle_types`
--

CREATE TABLE `vehicle_types` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(120) NOT NULL,
  `description` varchar(120) DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `vendors`
--

CREATE TABLE `vendors` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `code` varchar(120) NOT NULL,
  `name` varchar(120) NOT NULL,
  `email` varchar(120) DEFAULT NULL,
  `phone` varchar(120) DEFAULT NULL,
  `address` varchar(120) DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `departments`
--
ALTER TABLE `departments`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `departments_name_unique` (`name`);

--
-- Indexes for table `document_types`
--
ALTER TABLE `document_types`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `document_types_name_unique` (`name`);

--
-- Indexes for table `drivers`
--
ALTER TABLE `drivers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `drivers_license_type_id_foreign` (`license_type_id`);

--
-- Indexes for table `driver_performances`
--
ALTER TABLE `driver_performances`
  ADD PRIMARY KEY (`id`),
  ADD KEY `driver_performances_driver_id_foreign` (`driver_id`);

--
-- Indexes for table `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`id`),
  ADD KEY `employees_department_id_foreign` (`department_id`),
  ADD KEY `employees_position_id_foreign` (`position_id`);

--
-- Indexes for table `expenses`
--
ALTER TABLE `expenses`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `expenses_code_unique` (`code`);

--
-- Indexes for table `expense_details`
--
ALTER TABLE `expense_details`
  ADD PRIMARY KEY (`id`),
  ADD KEY `expense_details_expense_id_foreign` (`expense_id`),
  ADD KEY `expense_details_type_id_foreign` (`type_id`);

--
-- Indexes for table `expense_types`
--
ALTER TABLE `expense_types`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `expense_types_name_unique` (`name`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `fuel_requisitions`
--
ALTER TABLE `fuel_requisitions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `fuel_requisitions_code_unique` (`code`),
  ADD KEY `fuel_requisitions_vehicle_id_foreign` (`vehicle_id`),
  ADD KEY `fuel_requisitions_station_id_foreign` (`station_id`),
  ADD KEY `fuel_requisitions_type_id_foreign` (`type_id`);

--
-- Indexes for table `fuel_stations`
--
ALTER TABLE `fuel_stations`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `fuel_stations_code_unique` (`code`),
  ADD KEY `fuel_stations_vendor_id_foreign` (`vendor_id`);

--
-- Indexes for table `fuel_types`
--
ALTER TABLE `fuel_types`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `fuel_types_name_unique` (`name`);

--
-- Indexes for table `insurances`
--
ALTER TABLE `insurances`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `inventory_categories`
--
ALTER TABLE `inventory_categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `inventory_categories_name_unique` (`name`);

--
-- Indexes for table `inventory_expense_types`
--
ALTER TABLE `inventory_expense_types`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `inventory_expense_types_name_unique` (`name`);

--
-- Indexes for table `inventory_locations`
--
ALTER TABLE `inventory_locations`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `inventory_locations_name_unique` (`name`);

--
-- Indexes for table `inventory_parts`
--
ALTER TABLE `inventory_parts`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `inventory_parts_name_unique` (`name`),
  ADD KEY `inventory_parts_category_id_foreign` (`category_id`),
  ADD KEY `inventory_parts_location_id_foreign` (`location_id`);

--
-- Indexes for table `inventory_parts_usages`
--
ALTER TABLE `inventory_parts_usages`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `inventory_parts_usages_code_unique` (`code`),
  ADD KEY `inventory_parts_usages_created_by_foreign` (`created_by`),
  ADD KEY `inventory_parts_usages_vehicle_id_foreign` (`vehicle_id`);

--
-- Indexes for table `inventory_parts_usage_details`
--
ALTER TABLE `inventory_parts_usage_details`
  ADD PRIMARY KEY (`id`),
  ADD KEY `inventory_parts_usage_details_parts_usage_id_foreign` (`parts_usage_id`),
  ADD KEY `inventory_parts_usage_details_category_id_foreign` (`category_id`),
  ADD KEY `inventory_parts_usage_details_parts_id_foreign` (`parts_id`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indexes for table `languages`
--
ALTER TABLE `languages`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `languages_code_unique` (`code`);

--
-- Indexes for table `legal_documentations`
--
ALTER TABLE `legal_documentations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `license_types`
--
ALTER TABLE `license_types`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `license_types_name_unique` (`name`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `model_has_permissions`
--
ALTER TABLE `model_has_permissions`
  ADD PRIMARY KEY (`permission_id`,`model_id`,`model_type`),
  ADD KEY `model_has_permissions_model_id_model_type_index` (`model_id`,`model_type`);

--
-- Indexes for table `model_has_roles`
--
ALTER TABLE `model_has_roles`
  ADD PRIMARY KEY (`role_id`,`model_id`,`model_type`),
  ADD KEY `model_has_roles_model_id_model_type_index` (`model_id`,`model_type`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `permissions_name_guard_name_unique` (`name`,`guard_name`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `pickup_and_drops`
--
ALTER TABLE `pickup_and_drops`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `positions`
--
ALTER TABLE `positions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `positions_name_unique` (`name`);

--
-- Indexes for table `purchases`
--
ALTER TABLE `purchases`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `purchases_code_unique` (`code`),
  ADD KEY `purchases_vendor_id_foreign` (`vendor_id`);

--
-- Indexes for table `purchase_details`
--
ALTER TABLE `purchase_details`
  ADD PRIMARY KEY (`id`),
  ADD KEY `purchase_details_purchase_id_foreign` (`purchase_id`),
  ADD KEY `purchase_details_category_id_foreign` (`category_id`),
  ADD KEY `purchase_details_parts_id_foreign` (`parts_id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `roles_name_guard_name_unique` (`name`,`guard_name`);

--
-- Indexes for table `role_has_permissions`
--
ALTER TABLE `role_has_permissions`
  ADD PRIMARY KEY (`permission_id`,`role_id`),
  ADD KEY `role_has_permissions_role_id_foreign` (`role_id`);

--
-- Indexes for table `rta_offices`
--
ALTER TABLE `rta_offices`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `rta_offices_name_unique` (`name`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `settings`
--
ALTER TABLE `settings`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `settings_key_unique` (`key`);

--
-- Indexes for table `trip_types`
--
ALTER TABLE `trip_types`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `trip_types_name_unique` (`name`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`),
  ADD UNIQUE KEY `users_phone_unique` (`phone`);

--
-- Indexes for table `vehicles`
--
ALTER TABLE `vehicles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `vehicle_divisions`
--
ALTER TABLE `vehicle_divisions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `vehicle_divisions_name_unique` (`name`);

--
-- Indexes for table `vehicle_insurance_companies`
--
ALTER TABLE `vehicle_insurance_companies`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `vehicle_insurance_companies_name_unique` (`name`);

--
-- Indexes for table `vehicle_insurance_recurring_periods`
--
ALTER TABLE `vehicle_insurance_recurring_periods`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `vehicle_insurance_recurring_periods_name_unique` (`name`);

--
-- Indexes for table `vehicle_maintenances`
--
ALTER TABLE `vehicle_maintenances`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `vehicle_maintenances_code_unique` (`code`),
  ADD KEY `vehicle_maintenances_employee_id_foreign` (`employee_id`),
  ADD KEY `vehicle_maintenances_vehicle_id_foreign` (`vehicle_id`),
  ADD KEY `vehicle_maintenances_maintenance_type_id_foreign` (`maintenance_type_id`);

--
-- Indexes for table `vehicle_maintenance_details`
--
ALTER TABLE `vehicle_maintenance_details`
  ADD PRIMARY KEY (`id`),
  ADD KEY `vehicle_maintenance_details_maintenance_id_foreign` (`maintenance_id`),
  ADD KEY `vehicle_maintenance_details_category_id_foreign` (`category_id`),
  ADD KEY `vehicle_maintenance_details_parts_id_foreign` (`parts_id`);

--
-- Indexes for table `vehicle_maintenance_types`
--
ALTER TABLE `vehicle_maintenance_types`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `vehicle_maintenance_types_name_unique` (`name`);

--
-- Indexes for table `vehicle_ownership_types`
--
ALTER TABLE `vehicle_ownership_types`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `vehicle_ownership_types_name_unique` (`name`);

--
-- Indexes for table `vehicle_refuelings`
--
ALTER TABLE `vehicle_refuelings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `vehicle_requisitions`
--
ALTER TABLE `vehicle_requisitions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `vehicle_requisitions_employee_id_foreign` (`employee_id`),
  ADD KEY `vehicle_requisitions_vehicle_type_id_foreign` (`vehicle_type_id`);

--
-- Indexes for table `vehicle_requisition_purposes`
--
ALTER TABLE `vehicle_requisition_purposes`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `vehicle_requisition_purposes_name_unique` (`name`);

--
-- Indexes for table `vehicle_requisition_types`
--
ALTER TABLE `vehicle_requisition_types`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `vehicle_requisition_types_name_unique` (`name`);

--
-- Indexes for table `vehicle_route_details`
--
ALTER TABLE `vehicle_route_details`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `vehicle_types`
--
ALTER TABLE `vehicle_types`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `vehicle_types_name_unique` (`name`);

--
-- Indexes for table `vendors`
--
ALTER TABLE `vendors`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `vendors_code_unique` (`code`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `departments`
--
ALTER TABLE `departments`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `document_types`
--
ALTER TABLE `document_types`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `drivers`
--
ALTER TABLE `drivers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `driver_performances`
--
ALTER TABLE `driver_performances`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `employees`
--
ALTER TABLE `employees`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `expenses`
--
ALTER TABLE `expenses`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `expense_details`
--
ALTER TABLE `expense_details`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `expense_types`
--
ALTER TABLE `expense_types`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `fuel_requisitions`
--
ALTER TABLE `fuel_requisitions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `fuel_stations`
--
ALTER TABLE `fuel_stations`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `fuel_types`
--
ALTER TABLE `fuel_types`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `insurances`
--
ALTER TABLE `insurances`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `inventory_categories`
--
ALTER TABLE `inventory_categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `inventory_expense_types`
--
ALTER TABLE `inventory_expense_types`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `inventory_locations`
--
ALTER TABLE `inventory_locations`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `inventory_parts`
--
ALTER TABLE `inventory_parts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `inventory_parts_usages`
--
ALTER TABLE `inventory_parts_usages`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `inventory_parts_usage_details`
--
ALTER TABLE `inventory_parts_usage_details`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `languages`
--
ALTER TABLE `languages`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `legal_documentations`
--
ALTER TABLE `legal_documentations`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `license_types`
--
ALTER TABLE `license_types`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;

--
-- AUTO_INCREMENT for table `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pickup_and_drops`
--
ALTER TABLE `pickup_and_drops`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `positions`
--
ALTER TABLE `positions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `purchases`
--
ALTER TABLE `purchases`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `purchase_details`
--
ALTER TABLE `purchase_details`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `rta_offices`
--
ALTER TABLE `rta_offices`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `settings`
--
ALTER TABLE `settings`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `trip_types`
--
ALTER TABLE `trip_types`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `vehicles`
--
ALTER TABLE `vehicles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `vehicle_divisions`
--
ALTER TABLE `vehicle_divisions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `vehicle_insurance_companies`
--
ALTER TABLE `vehicle_insurance_companies`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `vehicle_insurance_recurring_periods`
--
ALTER TABLE `vehicle_insurance_recurring_periods`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `vehicle_maintenances`
--
ALTER TABLE `vehicle_maintenances`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `vehicle_maintenance_details`
--
ALTER TABLE `vehicle_maintenance_details`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `vehicle_maintenance_types`
--
ALTER TABLE `vehicle_maintenance_types`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `vehicle_ownership_types`
--
ALTER TABLE `vehicle_ownership_types`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `vehicle_refuelings`
--
ALTER TABLE `vehicle_refuelings`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `vehicle_requisitions`
--
ALTER TABLE `vehicle_requisitions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `vehicle_requisition_purposes`
--
ALTER TABLE `vehicle_requisition_purposes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `vehicle_requisition_types`
--
ALTER TABLE `vehicle_requisition_types`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `vehicle_route_details`
--
ALTER TABLE `vehicle_route_details`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `vehicle_types`
--
ALTER TABLE `vehicle_types`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `vendors`
--
ALTER TABLE `vendors`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `drivers`
--
ALTER TABLE `drivers`
  ADD CONSTRAINT `drivers_license_type_id_foreign` FOREIGN KEY (`license_type_id`) REFERENCES `license_types` (`id`);

--
-- Constraints for table `driver_performances`
--
ALTER TABLE `driver_performances`
  ADD CONSTRAINT `driver_performances_driver_id_foreign` FOREIGN KEY (`driver_id`) REFERENCES `drivers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `employees`
--
ALTER TABLE `employees`
  ADD CONSTRAINT `employees_department_id_foreign` FOREIGN KEY (`department_id`) REFERENCES `departments` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `employees_position_id_foreign` FOREIGN KEY (`position_id`) REFERENCES `positions` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `expense_details`
--
ALTER TABLE `expense_details`
  ADD CONSTRAINT `expense_details_expense_id_foreign` FOREIGN KEY (`expense_id`) REFERENCES `expenses` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `expense_details_type_id_foreign` FOREIGN KEY (`type_id`) REFERENCES `expense_types` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `fuel_requisitions`
--
ALTER TABLE `fuel_requisitions`
  ADD CONSTRAINT `fuel_requisitions_station_id_foreign` FOREIGN KEY (`station_id`) REFERENCES `fuel_stations` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `fuel_requisitions_type_id_foreign` FOREIGN KEY (`type_id`) REFERENCES `fuel_types` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `fuel_requisitions_vehicle_id_foreign` FOREIGN KEY (`vehicle_id`) REFERENCES `vehicles` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `fuel_stations`
--
ALTER TABLE `fuel_stations`
  ADD CONSTRAINT `fuel_stations_vendor_id_foreign` FOREIGN KEY (`vendor_id`) REFERENCES `vendors` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `inventory_parts`
--
ALTER TABLE `inventory_parts`
  ADD CONSTRAINT `inventory_parts_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `inventory_categories` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `inventory_parts_location_id_foreign` FOREIGN KEY (`location_id`) REFERENCES `inventory_locations` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `inventory_parts_usages`
--
ALTER TABLE `inventory_parts_usages`
  ADD CONSTRAINT `inventory_parts_usages_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `inventory_parts_usages_vehicle_id_foreign` FOREIGN KEY (`vehicle_id`) REFERENCES `vehicles` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `inventory_parts_usage_details`
--
ALTER TABLE `inventory_parts_usage_details`
  ADD CONSTRAINT `inventory_parts_usage_details_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `inventory_categories` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `inventory_parts_usage_details_parts_id_foreign` FOREIGN KEY (`parts_id`) REFERENCES `inventory_parts` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `inventory_parts_usage_details_parts_usage_id_foreign` FOREIGN KEY (`parts_usage_id`) REFERENCES `inventory_parts_usages` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `model_has_permissions`
--
ALTER TABLE `model_has_permissions`
  ADD CONSTRAINT `model_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `model_has_roles`
--
ALTER TABLE `model_has_roles`
  ADD CONSTRAINT `model_has_roles_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `purchases`
--
ALTER TABLE `purchases`
  ADD CONSTRAINT `purchases_vendor_id_foreign` FOREIGN KEY (`vendor_id`) REFERENCES `vendors` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `purchase_details`
--
ALTER TABLE `purchase_details`
  ADD CONSTRAINT `purchase_details_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `inventory_categories` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `purchase_details_parts_id_foreign` FOREIGN KEY (`parts_id`) REFERENCES `inventory_parts` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `purchase_details_purchase_id_foreign` FOREIGN KEY (`purchase_id`) REFERENCES `purchases` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `role_has_permissions`
--
ALTER TABLE `role_has_permissions`
  ADD CONSTRAINT `role_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `role_has_permissions_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `vehicle_maintenances`
--
ALTER TABLE `vehicle_maintenances`
  ADD CONSTRAINT `vehicle_maintenances_employee_id_foreign` FOREIGN KEY (`employee_id`) REFERENCES `employees` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `vehicle_maintenances_maintenance_type_id_foreign` FOREIGN KEY (`maintenance_type_id`) REFERENCES `vehicle_maintenance_types` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `vehicle_maintenances_vehicle_id_foreign` FOREIGN KEY (`vehicle_id`) REFERENCES `vehicles` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `vehicle_maintenance_details`
--
ALTER TABLE `vehicle_maintenance_details`
  ADD CONSTRAINT `vehicle_maintenance_details_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `inventory_categories` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `vehicle_maintenance_details_maintenance_id_foreign` FOREIGN KEY (`maintenance_id`) REFERENCES `vehicle_maintenances` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `vehicle_maintenance_details_parts_id_foreign` FOREIGN KEY (`parts_id`) REFERENCES `inventory_parts` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `vehicle_requisitions`
--
ALTER TABLE `vehicle_requisitions`
  ADD CONSTRAINT `vehicle_requisitions_employee_id_foreign` FOREIGN KEY (`employee_id`) REFERENCES `employees` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `vehicle_requisitions_vehicle_type_id_foreign` FOREIGN KEY (`vehicle_type_id`) REFERENCES `vehicle_types` (`id`) ON DELETE SET NULL;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
