using FluentMigrator;

namespace whey.Migrations.DefaultDB;

[DefaultDB, MigrationKey(20251122_1411)]
public class DefaultDB_20251122_1411_SanPhamChiTiet : AutoReversingMigration
{
    public override void Up()
    {
        Create.Table("SanPhamChiTiet")
     .WithColumn("Id").AsInt32().Identity().PrimaryKey().NotNullable()
     .WithColumn("SanPhamId").AsInt32().NotNullable()
     .ForeignKey("FK_SanPhamChiTiet_SanPham", "SanPham", "MaSp")
     .WithColumn("TrongLuongText").AsString(50).Nullable()  
     .WithColumn("SoLanDungMin").AsInt32().Nullable()
     .WithColumn("SoLanDungMax").AsInt32().Nullable()
     .WithColumn("HamLuongProtein").AsString(50).Nullable()  
     .WithColumn("Calories").AsString(50).Nullable()
     .WithColumn("HamLuongBcaa").AsString(50).Nullable()
     .WithColumn("XuatXu").AsString(50).Nullable();
    }
}