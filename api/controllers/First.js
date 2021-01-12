const produk = [
  {
    id_produk: 1,
    nama_produk: "Huawei P30 pro",
  },
  {
    id_produk: 2,
    nama_produk: "Huawei Nova 5T",
  },
];
const stok_produk = [
  {
    id_produk: 1,
    qty: 15,
  },
  {
    id_produk: 1,
    qty: 6,
  },
  {
    id_produk: 2,
    qty: 4,
  },
  {
    id_produk: 2,
    qty: 18,
  },
];
module.exports = {
  First: async (req, res) => {
    try {
      const result = [];
      await produk.forEach((element) => {
        let qty = 0;
        stok_produk.forEach((stok) => {
          element.id_produk === stok.id_produk ? (qty = qty + stok.qty) : null;
        });
        result.push({
          nama_produk: element.nama_produk,
          total_stock: qty,
        });
      });
      return res.json({ hasil: result });
    } catch (error) {
      return res.status(500).json({
        message: "Failed",
      });
    }
  },
};
