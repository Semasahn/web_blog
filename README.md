# 📝 Web Blog Projesi

Bu proje, kullanıcıların blog yazıları oluşturup paylaşabilecekleri bir modern web uygulamasıdır. Kullanıcılar, yazı ekleme, düzenleme ve silme gibi işlemleri gerçekleştirebilir; diğer kullanıcıların yazılarını inceleyip yorum yapabilirler. Amacımız, yaratıcı fikirlerin kolayca paylaşılabileceği bir platform sunmaktır.

## 📂 Proje Yapısı

### 🌐 Backend
- **Teknolojiler**: Java, Spring Boot, Hibernate
- **Dizinler**:
  - `src/main/java/com/mycompany/web_blog/Model/`: Veritabanı tablolarını temsil eden JPA entity sınıfları.
  - `src/main/java/com/mycompany/web_blog/Controller/`: HTTP isteklerini yöneten denetleyici sınıflar.
  - `src/main/java/com/mycompany/web_blog/Repository/`: Veritabanı işlemleri için JPA repository arayüzleri.
  - `src/main/resources/`: Uygulama yapılandırma dosyaları ve şablonlar.

### 🎨 Frontend
- **Teknolojiler**: HTML, CSS, JavaScript
- **Dizinler**:
  - `src/main/resources/templates/`: Kullanıcı arayüzü için Thymeleaf şablon dosyaları.
  - `src/main/resources/static/css/`: Stil dosyaları (CSS).
  - `src/main/resources/static/js/`: Dinamik işlevler için JavaScript dosyaları.

## 🚀 Kurulum ve Çalıştırma

### Gereksinimler
- Java Development Kit (JDK) 8 veya üzeri
- Maven 3.6 veya üzeri
- MySQL Veritabanı

### Adımlar
1. **Projeyi Klonlayın**
   ```bash
   git clone https://github.com/Semasahn/web_blog.git
   ```
2. **Proje Dizine Geçiş Yapın**
   ```bash
   cd web_blog
   ```
3. **Veritabanı Yapılandırması**
   `src/main/resources/application.properties` dosyasını açarak aşağıdaki şekilde düzenleyin:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/web_blog
   spring.datasource.username=KULLANICI_ADI
   spring.datasource.password=ŞİFRE
   ```
4. **Bağımlılıkları Yükleyin ve Projeyi Paketleyin**
   ```bash
   mvn clean install
   ```
5. **Uygulamayı Başlatın**
   ```bash
   mvn spring-boot:run
   ```
6. **Uygulamaya Erişin**
   Tarayıcınızda [http://localhost:8080](http://localhost:8080) adresini açarak uygulamayı kullanabilirsiniz.

## ✨ Özellikler
- **Kullanıcı Yönetimi**: Kullanıcı kaydı, giriş yapma ve profil düzenleme.
- **Blog Yönetimi**: Blog yazıları oluşturma, düzenleme ve silme.
- **Yorumlama**: Diğer kullanıcıların yazılarına yorum yapma.
- **Arama**: Blog yazıları arasında anahtar kelimelere göre arama yapma.
- **Responsive Tasarım**: Hem masaüstü hem de mobil cihazlarda kusursuz kullanıcı deneyimi.

## 🤝 Katkıda Bulunma
Projeye katkıda bulunmak ister misiniz? İşte adımlar:
1. Bu projeyi **fork** edin.
2. Yeni bir dal oluşturun:
   ```bash
   git checkout -b ozellik/yeni-ozellik
   ```
3. Değişikliklerinizi commit edin:
   ```bash
   git commit -m "Yeni bir özellik eklendi."
   ```
4. Dalınızı depoya gönderin:
   ```bash
   git push origin ozellik/yeni-ozellik
   ```
5. Bir **pull request** oluşturun ve değişikliklerinizi paylaşın.

## 📜 Lisans
Bu proje **MIT Lisansı** altında lisanslanmıştır. Daha fazla bilgi için `LICENSE` dosyasına göz atabilirsiniz.


