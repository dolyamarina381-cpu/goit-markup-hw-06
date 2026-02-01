# Необхідні зображення для проєкту

Для повноцінної роботи респонсивної верстки потрібно створити наступні зображення:

## Hero секція - фонові зображення

### Мобільні пристрої (до 767px)

- `images/people-office-mobile.jpg` - 320px ширина
- `images/people-office-mobile@2x.jpg` - 640px ширина (для retina дисплеїв)

### Планшети (768px - 1157px)

- `images/people-office-tablet.jpg` - 768px ширина
- `images/people-office-tablet@2x.jpg` - 1536px ширина (для retina дисплеїв)

### Десктоп (1158px+)

- `images/people-office-desktop.jpg` - 1440px ширина
- `images/people-office-desktop@2x.jpg` - 2880px ширина (для retina дисплеїв)

**Джерело:** використовуйте поточне зображення `people-office.jpg` для створення версій різних розмірів

---

## Команда - фото членів команди

### Retina версії для команди

Створіть @2x версії для всіх фото команди (подвоєна роздільна здатність):

- `images/img(1)@2x.jpg` - Mark Guerrero (528x520px)
- `images/img(2)@2x.jpg` - Tom Ford (528x520px)
- `images/img(3)@2x.jpg` - Camila Garcia (528x520px)
- `images/img(4)@2x.jpg` - Daniel Wilson (528x520px)

**Джерело:** використовуйте поточні зображення `img(1-4).jpg` для створення версій @2x

---

## Портфоліо - скріншоти проєктів

### Retina версії для портфоліо

Створіть @2x версії для всіх зображень портфоліо (подвоєна роздільна здатність):

- `images/img(5)@2x.png` - Banking App (720x600px)
- `images/img(6)@2x.png` - Cashless Payment (720x600px)
- `images/img(7)@2x.png` - Meditation App (720x600px)
- `images/img(8)@2x.png` - Taxi Service (720x600px)
- `images/img(9)@2x.png` - Screen Illustrations (720x600px)
- `images/img(10)@2x.png` - Online Courses (720x600px)

**Джерело:** використовуйте поточні зображення `img(5-10).png` для створення версій @2x

---

## Інструкції зі створення

### Використання онлайн-інструментів

1. **Squoosh** (https://squoosh.app/) - безкоштовний онлайн-компресор зображень
2. **TinyPNG** (https://tinypng.com/) - оптимізація PNG і JPEG

### Використання командного рядка (ImageMagick)

```bash
# Для створення @2x версій (подвоєння розміру)
magick convert img(1).jpg -resize 200% img(1)@2x.jpg

# Для створення мобільної версії hero фону
magick convert people-office.jpg -resize 320x people-office-mobile.jpg
magick convert people-office.jpg -resize 640x people-office-mobile@2x.jpg

# Для створення планшетної версії
magick convert people-office.jpg -resize 768x people-office-tablet.jpg
magick convert people-office.jpg -resize 1536x people-office-tablet@2x.jpg

# Для створення десктопної версії
magick convert people-office.jpg -resize 1440x people-office-desktop.jpg
magick convert people-office.jpg -resize 2880x people-office-desktop@2x.jpg
```

### Використання Photoshop

1. Відкрийте зображення
2. Image → Image Size
3. Встановіть потрібну ширину
4. Зберіть з оптимізацією: File → Export → Save for Web (Legacy)

---

## Примітка

До створення всіх зображень сайт буде працювати з поточними версіями, але для досягнення найкращої якості на всіх пристроях рекомендується створити всі зазначені файли.
