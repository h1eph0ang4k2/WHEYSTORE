using FluentMigrator;

namespace whey.Migrations.DefaultDB;

[DefaultDB, MigrationKey(20251122_1409)]
public class DefaultDB_20251122_1409_ChiTietDonHang : AutoReversingMigration
{
    public override void Up()
    {
       Create.Table("ChiTietDonHang")
            .WithColumn("ChiTietDonHangId").AsInt32().Identity().PrimaryKey().NotNullable()
            .WithColumn("MaDH").AsInt32().NotNullable()
            .WithColumn("MaSp").AsInt32().NotNullable()
            .WithColumn("TenSP").AsString(200).NotNullable()
            .WithColumn("AnhSp").AsString(255).Nullable()
            .WithColumn("DonGia").AsDecimal(18, 0).NotNullable()
            .WithColumn("GiamGia").AsDecimal(5, 2).NotNullable().WithDefaultValue(0.00m)
            .WithColumn("SoLuong").AsInt32().NotNullable().WithDefaultValue(1)
            .WithColumn("ThanhTien").AsDecimal(18, 0).NotNullable().WithDefaultValue(0);
    }
}

