using FluentMigrator;

namespace whey.Migrations.DefaultDB;

[DefaultDB, MigrationKey(20251122_1408)]
public class DefaultDB_20251122_1408_DonHang : AutoReversingMigration
{
    public override void Up()
    {
       Create.Table("DonHang")
            .WithColumn("MaDH").AsInt32().Identity().PrimaryKey().NotNullable()
            .WithColumn("MaKhachHang").AsInt32().Nullable()
            .WithColumn("HoTenNguoiNhan").AsString(150).NotNullable()
            .WithColumn("DiaChiNguoiNhan").AsString(300).NotNullable()
            .WithColumn("SoDienThoaiNguoiNhan").AsString(24).NotNullable()
            .WithColumn("EmailNguoiNhan").AsString(100).Nullable()
            .WithColumn("TinhThanhNguoiNhan").AsString(100).NotNullable()
            .WithColumn("QuanHuyenNguoiNhan").AsString(100).NotNullable()
            .WithColumn("PhuongXaNguoiNhan").AsString(100).NotNullable()
            .WithColumn("MaBuuChinhNguoiNhan").AsString(20).Nullable()
            .WithColumn("ShipperId").AsInt32().Nullable()
            .WithColumn("NgayDatHang").AsDateTime2().NotNullable().WithDefault(SystemMethods.CurrentDateTime)
            .WithColumn("NgayGiaoHangDuKhien").AsDateTime2().Nullable()
            .WithColumn("NgayGiaoHangHoanThanh").AsDateTime2().Nullable()
            .WithColumn("TongTienHang").AsDecimal(18, 0).NotNullable().WithDefaultValue(0)
            .WithColumn("PhiVanChuyen").AsDecimal(18, 0).NotNullable().WithDefaultValue(0)
            .WithColumn("TongThanhToan").AsDecimal(18, 0).NotNullable().WithDefaultValue(0)
            .WithColumn("GiamGiaDonHang").AsDecimal(18, 0).NotNullable().WithDefaultValue(0)
            .WithColumn("PhuongThucThanhToan").AsString(100).NotNullable()
            .WithColumn("DaThanhToan").AsBoolean().NotNullable().WithDefaultValue(false)
            .WithColumn("TrangThaiDonHang").AsInt16().NotNullable().WithDefaultValue(0)
            .WithColumn("GhiChu").AsString(1000).Nullable()
            .WithColumn("CreatedAt").AsDateTime2().NotNullable()
                    .WithDefault(SystemMethods.CurrentDateTime)
                    .WithColumn("UpdatedAt").AsDateTime2().Nullable();
    }
}



