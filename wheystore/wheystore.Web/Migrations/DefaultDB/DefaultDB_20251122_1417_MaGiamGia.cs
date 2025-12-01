using FluentMigrator;

namespace whey.Migrations.DefaultDB;

[DefaultDB, MigrationKey(20251122_1417)]
public class DefaultDB_20251122_1417_MaGiamGia : AutoReversingMigration
{
    public override void Up()
    {
        Create.Table("MaGiamGia")
            .WithColumn("Id").AsInt32().Identity().PrimaryKey().NotNullable()
            .WithColumn("MaCode").AsString(50).NotNullable()        
            .WithColumn("MoTa").AsString(255).Nullable()
            .WithColumn("LoaiGiam").AsInt16().NotNullable()         
            .WithColumn("GiaTri").AsDecimal(18, 0).NotNullable()    
            .WithColumn("DonToiThieu").AsDecimal(18, 0).Nullable()  
            .WithColumn("NgayBatDau").AsDateTime2().Nullable()
            .WithColumn("NgayKetThuc").AsDateTime2().Nullable()
            .WithColumn("SoLanDungToiDa").AsInt32().Nullable()      
            .WithColumn("SoLanDungMoiKhach").AsInt32().Nullable()
            .WithColumn("IsActive").AsBoolean().NotNullable().WithDefaultValue(true);
    }
}