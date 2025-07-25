# Instagram Fake Login Demo (Node.js + Discord Webhook)

Bu proje, Instagram benzeri sahte bir giriş arayüzü oluşturur ve girilen kullanıcı adı/şifre bilgilerini **Discord Webhook** üzerinden belirtilen bir kanala gönderir. Tamamen **siber güvenlik eğitimleri ve farkındalık testleri** amacıyla tasarlanmıştır.

> ⚠️ **UYARI:** Bu uygulama yalnızca yasal, etik ve eğitimsel amaçlarla kullanılmalıdır. Gerçek kullanıcı verilerinin izinsiz toplanması yasa dışıdır.

---

## 📌 Özellikler

- Gerçeğe yakın Instagram giriş arayüzü (`index.html`)
- Discord Webhook ile giriş bilgilerini anlık iletme
- `.env` dosyası üzerinden kolay yapılandırma
- Minimal, bağımlılığı düşük Node.js uygulaması

---

## ⚙️ Kurulum ve Kullanım

### 1. Reponun Kopyalanması

```bash
git clone https://github.com/fastuptime/Instagram_FakeLogin_Demo_Nodejs.git
cd Instagram_FakeLogin_Demo_Nodejs
````

### 2. Bağımlılıkların Kurulumu

```bash
npm install
```

### 3. `.env` Dosyasını Oluşturun

Proje kök dizinine `.env` dosyası ekleyin ve Discord Webhook URL’nizi girin:

```
WEBHOOK_URL=https://discord.com/api/webhooks/xxxxxxxxx/yyyyyyyyyyyyyy
```

### 4. Uygulamayı Başlatın

```bash
node index.js
```

### 5. Erişim

Tarayıcıda şu adresi açın:

```
http://localhost:3000
```

---

## 📂 Proje Yapısı

```
.
├── index.html       # Instagram benzeri giriş sayfası
├── index.js         # Node.js sunucusu ve webhook gönderimi
├── .env             # Webhook URL bilgisi
├── package.json     # Bağımlılıklar
```

---

## 📤 Webhook Gönderimi

Girilen kullanıcı adı ve şifre, Discord Webhook URL’sine aşağıdaki gibi bir mesajla gönderilir:

```
📥 Yeni Giriş Denemesi
👤 Kullanıcı Adı: example_user
🔑 Şifre: example_pass
```

---

## ⚠️ Yasal ve Etik Uyarı

Bu proje, siber güvenlik eğitimleri, penetrasyon testleri ve farkındalık çalışmaları için geliştirilmiştir. Aşağıdaki durumlarda **kullanılması kesinlikle yasaktır**:

* Kullanıcının izni olmadan bilgi toplamak
* Gerçek Instagram sunucularını taklit ederek kimlik avı yapmak
* Bu projeyi kötü amaçlı kullanmak

Yasal olmayan kullanım durumlarında tüm sorumluluk kullanıcıya aittir.

---

## 👨‍💻 Geliştirici

* **fastuptime** – [GitHub](https://github.com/fastuptime)

---

## 📄 Lisans

MIT Lisansı ile lisanslanmıştır.
