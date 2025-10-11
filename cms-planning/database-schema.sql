-- StaraJIN CMS Database Schema
-- Supports multi-language content with auto-translation

-- Users and Authentication
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role ENUM('admin', 'editor', 'viewer') DEFAULT 'viewer',
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Header Content Management
CREATE TABLE header_content (
    id INT PRIMARY KEY AUTO_INCREMENT,
    logo_url VARCHAR(255),
    company_name_en VARCHAR(100),
    company_name_ko VARCHAR(100),
    tagline_en TEXT,
    tagline_ko TEXT,
    contact_phone VARCHAR(20),
    contact_email VARCHAR(100),
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Navigation Menu Items
CREATE TABLE navigation_menu (
    id INT PRIMARY KEY AUTO_INCREMENT,
    parent_id INT NULL,
    label_en VARCHAR(50) NOT NULL,
    label_ko VARCHAR(50),
    url VARCHAR(255),
    sort_order INT DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (parent_id) REFERENCES navigation_menu(id) ON DELETE CASCADE
);

-- Footer Content Management
CREATE TABLE footer_content (
    id INT PRIMARY KEY AUTO_INCREMENT,
    company_description_en TEXT,
    company_description_ko TEXT,
    address_korea_en TEXT,
    address_korea_ko TEXT,
    address_india_en TEXT,
    address_india_ko TEXT,
    phone_korea VARCHAR(20),
    phone_india VARCHAR(20),
    email_main VARCHAR(100),
    social_facebook VARCHAR(255),
    social_linkedin VARCHAR(255),
    social_twitter VARCHAR(255),
    copyright_text_en VARCHAR(255),
    copyright_text_ko VARCHAR(255),
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Projects Management
CREATE TABLE projects (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title_en VARCHAR(200) NOT NULL,
    title_ko VARCHAR(200),
    slug VARCHAR(200) UNIQUE NOT NULL,
    description_en TEXT,
    description_ko TEXT,
    content_en LONGTEXT,
    content_ko LONGTEXT,
    featured_image VARCHAR(255),
    gallery_images JSON,
    category ENUM('korea-india-partnership', 'technology', 'business', 'cultural') DEFAULT 'korea-india-partnership',
    status ENUM('planning', 'in-progress', 'completed', 'on-hold') DEFAULT 'planning',
    start_date DATE,
    end_date DATE,
    client_name VARCHAR(100),
    project_value DECIMAL(15,2),
    location_korea VARCHAR(100),
    location_india VARCHAR(100),
    tags JSON,
    seo_title_en VARCHAR(200),
    seo_title_ko VARCHAR(200),
    seo_description_en VARCHAR(300),
    seo_description_ko VARCHAR(300),
    is_featured BOOLEAN DEFAULT false,
    is_published BOOLEAN DEFAULT false,
    published_at TIMESTAMP NULL,
    created_by INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (created_by) REFERENCES users(id)
);

-- Team Members
CREATE TABLE team_members (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name_en VARCHAR(100) NOT NULL,
    name_ko VARCHAR(100),
    position_en VARCHAR(100),
    position_ko VARCHAR(100),
    department_en VARCHAR(50),
    department_ko VARCHAR(50),
    bio_en TEXT,
    bio_ko TEXT,
    photo_url VARCHAR(255),
    email VARCHAR(100),
    phone VARCHAR(20),
    linkedin_url VARCHAR(255),
    location ENUM('korea', 'india', 'both') DEFAULT 'korea',
    is_leadership BOOLEAN DEFAULT false,
    sort_order INT DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Blog Posts
CREATE TABLE blog_posts (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title_en VARCHAR(200) NOT NULL,
    title_ko VARCHAR(200),
    slug VARCHAR(200) UNIQUE NOT NULL,
    excerpt_en TEXT,
    excerpt_ko TEXT,
    content_en LONGTEXT,
    content_ko LONGTEXT,
    featured_image VARCHAR(255),
    category_en VARCHAR(50),
    category_ko VARCHAR(50),
    tags JSON,
    author_id INT,
    seo_title_en VARCHAR(200),
    seo_title_ko VARCHAR(200),
    seo_description_en VARCHAR(300),
    seo_description_ko VARCHAR(300),
    is_featured BOOLEAN DEFAULT false,
    is_published BOOLEAN DEFAULT false,
    published_at TIMESTAMP NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (author_id) REFERENCES users(id)
);

-- Services
CREATE TABLE services (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name_en VARCHAR(100) NOT NULL,
    name_ko VARCHAR(100),
    slug VARCHAR(100) UNIQUE NOT NULL,
    short_description_en TEXT,
    short_description_ko TEXT,
    detailed_description_en LONGTEXT,
    detailed_description_ko LONGTEXT,
    icon_class VARCHAR(50),
    featured_image VARCHAR(255),
    gallery_images JSON,
    is_featured BOOLEAN DEFAULT false,
    sort_order INT DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Page Content (For About, Contact, etc.)
CREATE TABLE page_content (
    id INT PRIMARY KEY AUTO_INCREMENT,
    page_slug VARCHAR(50) NOT NULL,
    section_name VARCHAR(50) NOT NULL,
    content_type ENUM('text', 'html', 'image', 'video', 'json') DEFAULT 'text',
    content_en LONGTEXT,
    content_ko LONGTEXT,
    meta_data JSON,
    sort_order INT DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    UNIQUE KEY unique_page_section (page_slug, section_name)
);

-- Media Files
CREATE TABLE media_files (
    id INT PRIMARY KEY AUTO_INCREMENT,
    original_name VARCHAR(255) NOT NULL,
    file_name VARCHAR(255) NOT NULL,
    file_path VARCHAR(500) NOT NULL,
    file_size INT,
    mime_type VARCHAR(100),
    alt_text_en VARCHAR(255),
    alt_text_ko VARCHAR(255),
    uploaded_by INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (uploaded_by) REFERENCES users(id)
);

-- Translation Queue (For auto-translation tracking)
CREATE TABLE translation_queue (
    id INT PRIMARY KEY AUTO_INCREMENT,
    table_name VARCHAR(50) NOT NULL,
    record_id INT NOT NULL,
    field_name VARCHAR(50) NOT NULL,
    source_language ENUM('en', 'ko') DEFAULT 'en',
    target_language ENUM('en', 'ko') DEFAULT 'ko',
    source_text LONGTEXT,
    translated_text LONGTEXT,
    translation_service VARCHAR(50),
    status ENUM('pending', 'processing', 'completed', 'failed') DEFAULT 'pending',
    error_message TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Site Settings
CREATE TABLE site_settings (
    id INT PRIMARY KEY AUTO_INCREMENT,
    setting_key VARCHAR(100) UNIQUE NOT NULL,
    setting_value_en LONGTEXT,
    setting_value_ko LONGTEXT,
    setting_type ENUM('text', 'textarea', 'boolean', 'number', 'json') DEFAULT 'text',
    description_en VARCHAR(255),
    description_ko VARCHAR(255),
    is_translatable BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insert default admin user
INSERT INTO users (username, email, password_hash, role, first_name, last_name) 
VALUES ('admin', 'admin@starajin.com', '$2b$10$example_hash', 'admin', 'System', 'Administrator');

-- Insert default navigation menu
INSERT INTO navigation_menu (label_en, label_ko, url, sort_order) VALUES
('Home', '홈', '/', 1),
('About', '회사소개', '/about', 2),
('Services', '서비스', '/services', 3),
('Projects', '프로젝트', '/projects', 4),
('Team', '팀', '/team', 5),
('Blog', '블로그', '/blog', 6),
('Contact', '연락처', '/contact', 7);

-- Insert default site settings
INSERT INTO site_settings (setting_key, setting_value_en, setting_value_ko, setting_type, description_en, is_translatable) VALUES
('site_title', 'StaraJIN - Korea India Business Partnership', '스타라진 - 한국 인도 비즈니스 파트너십', 'text', 'Main site title', true),
('site_description', 'Bridging Korea and India through strategic business partnerships', '전략적 비즈니스 파트너십을 통해 한국과 인도를 연결', 'textarea', 'Site meta description', true),
('contact_email', 'info@starajin.com', 'info@starajin.com', 'text', 'Main contact email', false),
('google_translate_api_key', '', '', 'text', 'Google Translate API Key', false),
('auto_translate_enabled', 'true', 'true', 'boolean', 'Enable automatic translation', false);