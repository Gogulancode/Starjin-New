-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `role` ENUM('ADMIN', 'EDITOR', 'VIEWER') NOT NULL DEFAULT 'EDITOR',
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `users_username_key`(`username`),
    UNIQUE INDEX `users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `projects` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title_en` VARCHAR(191) NOT NULL,
    `title_ko` VARCHAR(191) NULL,
    `description_en` TEXT NOT NULL,
    `description_ko` TEXT NULL,
    `shortDesc_en` VARCHAR(191) NULL,
    `shortDesc_ko` VARCHAR(191) NULL,
    `category` ENUM('MOBILE_APP', 'WEB_APPLICATION', 'ENTERPRISE_SOFTWARE', 'ECOMMERCE', 'CONSULTING', 'INFRASTRUCTURE', 'AI_ML', 'BLOCKCHAIN', 'OTHER') NOT NULL,
    `status` ENUM('PLANNING', 'IN_PROGRESS', 'COMPLETED', 'ON_HOLD', 'CANCELLED', 'ACTIVE') NOT NULL DEFAULT 'ACTIVE',
    `location_en` VARCHAR(191) NULL,
    `location_ko` VARCHAR(191) NULL,
    `startDate` DATETIME(3) NULL,
    `endDate` DATETIME(3) NULL,
    `budget` DECIMAL(15, 2) NULL,
    `clientName_en` VARCHAR(191) NULL,
    `clientName_ko` VARCHAR(191) NULL,
    `technologies` TEXT NULL,
    `features_en` TEXT NULL,
    `features_ko` TEXT NULL,
    `challenges_en` TEXT NULL,
    `challenges_ko` TEXT NULL,
    `results_en` TEXT NULL,
    `results_ko` TEXT NULL,
    `projectUrl` VARCHAR(191) NULL,
    `githubUrl` VARCHAR(191) NULL,
    `isPublished` BOOLEAN NOT NULL DEFAULT true,
    `isFeatured` BOOLEAN NOT NULL DEFAULT false,
    `sortOrder` INTEGER NOT NULL DEFAULT 0,
    `seoTitle_en` VARCHAR(191) NULL,
    `seoTitle_ko` VARCHAR(191) NULL,
    `seoDescription_en` VARCHAR(191) NULL,
    `seoDescription_ko` VARCHAR(191) NULL,
    `createdBy` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `blog_posts` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title_en` VARCHAR(191) NOT NULL,
    `title_ko` VARCHAR(191) NULL,
    `slug_en` VARCHAR(191) NOT NULL,
    `slug_ko` VARCHAR(191) NULL,
    `excerpt_en` TEXT NULL,
    `excerpt_ko` TEXT NULL,
    `content_en` LONGTEXT NOT NULL,
    `content_ko` LONGTEXT NULL,
    `category` VARCHAR(191) NOT NULL,
    `tags` TEXT NULL,
    `isPublished` BOOLEAN NOT NULL DEFAULT false,
    `isFeatured` BOOLEAN NOT NULL DEFAULT false,
    `publishedAt` DATETIME(3) NULL,
    `readingTime` INTEGER NULL,
    `viewCount` INTEGER NOT NULL DEFAULT 0,
    `seoTitle_en` VARCHAR(191) NULL,
    `seoTitle_ko` VARCHAR(191) NULL,
    `seoDescription_en` VARCHAR(191) NULL,
    `seoDescription_ko` VARCHAR(191) NULL,
    `createdBy` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `blog_posts_slug_en_key`(`slug_en`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `team_members` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name_en` VARCHAR(191) NOT NULL,
    `name_ko` VARCHAR(191) NULL,
    `position_en` VARCHAR(191) NOT NULL,
    `position_ko` VARCHAR(191) NULL,
    `department_en` VARCHAR(191) NULL,
    `department_ko` VARCHAR(191) NULL,
    `bio_en` TEXT NULL,
    `bio_ko` TEXT NULL,
    `email` VARCHAR(191) NULL,
    `phone` VARCHAR(191) NULL,
    `linkedinUrl` VARCHAR(191) NULL,
    `githubUrl` VARCHAR(191) NULL,
    `twitterUrl` VARCHAR(191) NULL,
    `skills` TEXT NULL,
    `experience` INTEGER NULL,
    `education_en` TEXT NULL,
    `education_ko` TEXT NULL,
    `languages` TEXT NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `isFeatured` BOOLEAN NOT NULL DEFAULT false,
    `joinDate` DATETIME(3) NULL,
    `sortOrder` INTEGER NOT NULL DEFAULT 0,
    `profileImageId` INTEGER NULL,
    `createdBy` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `media` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `filename` VARCHAR(191) NOT NULL,
    `originalName` VARCHAR(191) NOT NULL,
    `mimeType` VARCHAR(191) NOT NULL,
    `size` INTEGER NOT NULL,
    `path` VARCHAR(191) NOT NULL,
    `url` VARCHAR(191) NOT NULL,
    `altText_en` VARCHAR(191) NULL,
    `altText_ko` VARCHAR(191) NULL,
    `caption_en` VARCHAR(191) NULL,
    `caption_ko` VARCHAR(191) NULL,
    `category` ENUM('IMAGE', 'VIDEO', 'DOCUMENT', 'AUDIO', 'OTHER') NOT NULL DEFAULT 'IMAGE',
    `isPublic` BOOLEAN NOT NULL DEFAULT true,
    `uploadedBy` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `site_settings` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `key` VARCHAR(191) NOT NULL,
    `value_en` TEXT NOT NULL,
    `value_ko` TEXT NULL,
    `category` VARCHAR(191) NOT NULL DEFAULT 'general',
    `isPublic` BOOLEAN NOT NULL DEFAULT true,
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `site_settings_key_key`(`key`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `navigation_items` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `label_en` VARCHAR(191) NOT NULL,
    `label_ko` VARCHAR(191) NULL,
    `url` VARCHAR(191) NOT NULL,
    `parentId` INTEGER NULL,
    `sortOrder` INTEGER NOT NULL DEFAULT 0,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `target` VARCHAR(191) NOT NULL DEFAULT '_self',
    `cssClass` VARCHAR(191) NULL,
    `icon` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `contact_info` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `type` VARCHAR(191) NOT NULL,
    `companyName_en` VARCHAR(191) NULL,
    `companyName_ko` VARCHAR(191) NULL,
    `address_en` TEXT NULL,
    `address_ko` TEXT NULL,
    `phone` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `website` VARCHAR(191) NULL,
    `mapUrl` VARCHAR(191) NULL,
    `latitude` DECIMAL(10, 7) NULL,
    `longitude` DECIMAL(10, 7) NULL,
    `workingHours_en` VARCHAR(191) NULL,
    `workingHours_ko` VARCHAR(191) NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `sortOrder` INTEGER NOT NULL DEFAULT 0,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `translation_queue` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `contentType` VARCHAR(191) NOT NULL,
    `contentId` INTEGER NOT NULL,
    `fieldName` VARCHAR(191) NOT NULL,
    `sourceText` TEXT NOT NULL,
    `targetLang` VARCHAR(191) NOT NULL DEFAULT 'ko',
    `status` ENUM('PENDING', 'IN_PROGRESS', 'COMPLETED', 'FAILED', 'SKIPPED') NOT NULL DEFAULT 'PENDING',
    `translatedText` TEXT NULL,
    `service` VARCHAR(191) NULL,
    `errorMessage` TEXT NULL,
    `attempts` INTEGER NOT NULL DEFAULT 0,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_BlogPostMedia` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_BlogPostMedia_AB_unique`(`A`, `B`),
    INDEX `_BlogPostMedia_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_ProjectMedia` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_ProjectMedia_AB_unique`(`A`, `B`),
    INDEX `_ProjectMedia_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `projects` ADD CONSTRAINT `projects_createdBy_fkey` FOREIGN KEY (`createdBy`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `blog_posts` ADD CONSTRAINT `blog_posts_createdBy_fkey` FOREIGN KEY (`createdBy`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `team_members` ADD CONSTRAINT `team_members_createdBy_fkey` FOREIGN KEY (`createdBy`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `team_members` ADD CONSTRAINT `team_members_profileImageId_fkey` FOREIGN KEY (`profileImageId`) REFERENCES `media`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `media` ADD CONSTRAINT `media_uploadedBy_fkey` FOREIGN KEY (`uploadedBy`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `navigation_items` ADD CONSTRAINT `navigation_items_parentId_fkey` FOREIGN KEY (`parentId`) REFERENCES `navigation_items`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_BlogPostMedia` ADD CONSTRAINT `_BlogPostMedia_A_fkey` FOREIGN KEY (`A`) REFERENCES `blog_posts`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_BlogPostMedia` ADD CONSTRAINT `_BlogPostMedia_B_fkey` FOREIGN KEY (`B`) REFERENCES `media`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ProjectMedia` ADD CONSTRAINT `_ProjectMedia_A_fkey` FOREIGN KEY (`A`) REFERENCES `media`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ProjectMedia` ADD CONSTRAINT `_ProjectMedia_B_fkey` FOREIGN KEY (`B`) REFERENCES `projects`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
