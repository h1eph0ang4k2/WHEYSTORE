using FluentMigrator;
using Serenity.Extensions;

namespace wheystore.Migrations.DefaultDB
{
    [MigrationKey(20250312_1428)]
    public class DefaultDB_20250312_1428_deletetable    
        : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("DonHang")
                .AlterColumn("TinhThanhNguoiNhan").AsString(100).Nullable()
                .AlterColumn("QuanHuyenNguoiNhan").AsString(100).Nullable()
                .AlterColumn("PhuongXaNguoiNhan").AsString(100).Nullable()
                .AlterColumn("MaBuuChinhNguoiNhan").AsString(100).Nullable()
                .AlterColumn("TrangThaiDonHang").AsInt16().NotNullable().WithDefaultValue(0);


        }
    }
}