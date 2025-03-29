# 使用 PHP 8.2 + FPM 版本
FROM php:8.2-fpm

# 安裝系統工具（zip、unzip 必須安裝，否則 composer 會報錯）
RUN apt-get update && apt-get install -y \
    zip \
    unzip \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    && docker-php-ext-configure gd \
    && docker-php-ext-install gd \
    && docker-php-ext-install pdo pdo_mysql opcache \
    && rm -rf /var/lib/apt/lists/*

# 設定工作目錄
WORKDIR /var/www/html

# 複製 Laravel 程式碼
COPY . /var/www/html

# 設定權限
RUN chown -R www-data:www-data /var/www/html \
    && chmod -R 775 /var/www/html/storage /var/www/html/bootstrap/cache

# 切換到 www-data 使用者（避免權限問題）
USER www-data

# 預設啟動 PHP-FPM
CMD ["php-fpm"]